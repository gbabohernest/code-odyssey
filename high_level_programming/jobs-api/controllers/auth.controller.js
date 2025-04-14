import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import User from "../models/user.model.js";
import { CustomAPIError } from "../utils/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";

const signup = async (req, res, next) => {
  const session = await mongoose.startSession();
  try {
    await session.startTransaction();
    const { name, email, password } = req.body;

    // check if email exists
    const existingUser = await User.findOne({ email })
      .select({ email: 1 })
      .session(session);
    if (existingUser) {
      throw new CustomAPIError("User already exists", StatusCodes.CONFLICT);
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await User.create([{ name, email, password: password }], {
      session,
    });

    const token = await jwt.sign(
      { name, email, password: password },
      JWT_SECRET,
      {
        expiresIn: JWT_EXPIRES_IN,
      },
    );
    await session.commitTransaction();

    res
      .status(StatusCodes.CREATED)
      .json({ success: true, message: "user created" });
  } catch (error) {
    await session.abortTransaction();
    next(error);
  } finally {
    await session.endSession();
  }
};

const login = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, message: "login success" });
};

export { signup, login };
