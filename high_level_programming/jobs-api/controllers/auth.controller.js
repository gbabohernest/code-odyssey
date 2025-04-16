import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import User from "../models/user.model.js";
import { CustomAPIError } from "../utils/index.js";

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

    const user = await User.create([{ name, email, password }], {
      session,
    });

    const token = user[0].createJWT();
    await session.commitTransaction();

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "user created",
      user: user[0].name,
      token,
    });
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
