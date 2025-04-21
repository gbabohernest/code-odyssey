import { StatusCodes } from "http-status-codes";
import User from "../models/user.model.js";
import {
  BadRequestError,
  CustomAPIError,
  UnauthenticatedError,
  withTransaction,
} from "../utils/index.js";

const signup = async (req, res, next) => {
  await withTransaction(async (session) => {
    const { name, email, password } = req.body;

    // check if email exists
    const existingUser = await User.findOne({ email }, { email: 1 }, null);

    if (existingUser) {
      return next(
        throw new CustomAPIError("User already exists", StatusCodes.CONFLICT),
      );
    }

    const user = await User.create([{ name, email, password }], {
      session,
    });

    const token = await user[0].createJWT();

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "user created",
      user: user[0].name,
      token,
    });
  }, next);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Email and Password are required");
  }

  const user = await User.findOne(
    { email },
    { email: 1, name: 1, password: 1 },
    null,
  );

  if (!user) {
    throw new UnauthenticatedError("Invalid Email ID");
  }

  const isPasswordValid = await user.compareAndVerifyPassword(password);

  if (!isPasswordValid) {
    throw new UnauthenticatedError("Invalid Password");
  }

  const token = await user.createJWT();

  res
    .status(StatusCodes.OK)
    .json({ success: true, message: "login success", user: user.name, token });
};

export { signup, login };
