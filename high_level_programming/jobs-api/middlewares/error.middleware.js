import { StatusCodes, getReasonPhrase } from "http-status-codes";

const { INTERNAL_SERVER_ERROR, BAD_REQUEST } = StatusCodes;

const errorMiddleware = (err, req, res, next) => {
  let message = err.message || getReasonPhrase(INTERNAL_SERVER_ERROR);
  let statusCode = err.statusCode || INTERNAL_SERVER_ERROR;

  //Mongoose duplicate key error
  if (err.code === 11000) {
    message = "Duplicate Key Error Collection [ value(s) already exists ]";
    statusCode = BAD_REQUEST;
  }

  // Mongoose bad ObjectID | Cast Error
  if (err.name === "CastError") {
    message = "Bad Object ID.";
    statusCode = BAD_REQUEST;
  }
  if (err.name === "ValidationError") {
    //mongoose validation error
    if (err.errors) {
      const msg = Object.values(err.errors);
      message = msg.map((value) => value.message).join(", ");
      statusCode = BAD_REQUEST;
    }
  }
  res.status(statusCode).json({ success: false, message });
};

export default errorMiddleware;
