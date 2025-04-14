import { StatusCodes } from "http-status-codes";

const signup = async (req, res) => {
  res
    .status(StatusCodes.CREATED)
    .json({ success: true, message: "user created" });
};

const login = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, message: "login success" });
};

export { signup, login };
