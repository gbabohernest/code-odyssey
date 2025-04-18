import { StatusCodes, getReasonPhrase } from "http-status-codes";

const { INTERNAL_SERVER_ERROR, BAD_REQUEST } = StatusCodes;

const errorMiddleware = (err, req, res, next) => {
  let message = err.message || getReasonPhrase(INTERNAL_SERVER_ERROR);
  let statusCode = err.statusCode || INTERNAL_SERVER_ERROR;

  //mongoose validation error
  if (err.name === "ValidationError") {
    if (err.errors) {
      const msg = Object.values(err.errors);
      message = msg.map((value) => value.message).join(", ");
    }
  }
  res.status(statusCode).json({ success: false, message });
};

export default errorMiddleware;
