/**
 *  Custom error middleware
 * @param err
 * @param req
 * @param res
 * @param next
 */
const errorMiddleware = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  //mongoose bad ObjectID
  if (err.name === "CastError") {
    message = "Bad Request, Invalid ID format";
    statusCode = 400;
  }

  //mongoose duplicate key
  if (err.code === 11000) {
    message = "Duplicate field value entered. Duplicate key error ";
    statusCode = 400;
  }

  // mongoose validation error
  if (err.name === "ValidationError") {
    if (err.errors) {
      const messages = Object.values(err.errors).map((value) => value.message);
      message = messages.join(", ");
      statusCode = 400;
    }
  }

  res.status(statusCode).json({ success: false, message });
};

export { errorMiddleware };
