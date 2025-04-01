import { CustomAPIError } from "../errors/api-error.js";

const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };

    error.message = err.message;

    // 404 Not found
    if (err instanceof CustomAPIError) {
      error.message = err.message;
      error.statusCode = err.statusCode;
    }

    // Mongoose bad ObjectID | Cast Error
    if (err.name === "CastError") {
      error = new CustomAPIError("Bad Request", 400);
    }

    //Mongoose Validation error
    if (err.name === "ValidationError") {
      if (err.errors) {
        const message = Object.values(err.errors).map((val) => val.message);
        error = new CustomAPIError(message.join(", "), 400);
      }
    }

    //mongoose  duplicate key error
    if (err.code === 11000) {
      error = new CustomAPIError("Duplicate Field Entry", 400);
    }

    res
      .status(error.statusCode || 500)
      .json({ success: false, message: error.message || "Server Error" });
  } catch (error) {
    next(error);
  }
};

export { errorMiddleware };
