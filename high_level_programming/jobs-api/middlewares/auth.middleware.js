

import { UnauthenticatedError } from "../utils/index.js";
import jwt from "jsonwebtoken";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";

/**
 * Checks the incoming request for a valid token.
 *
 * @param req - Request object
 * @param res - Response object
 * @param next - The next middleware in the chain
 * @returns {Promise<void>}
 */

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Unauthorized Access");
  }

  const token = authorization.split(" ")[1];

  try {
    const payload = await jwt.verify(token, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    req.user = { userID: payload.userID, name: payload.name };

    next();
  } catch (error) {
    next(new UnauthenticatedError(error.message));
  }
};

export { authMiddleware };
