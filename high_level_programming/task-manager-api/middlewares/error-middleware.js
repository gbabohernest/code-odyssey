/**
 *  Custom error middleware
 * @param err
 * @param req
 * @param res
 * @param next
 */
const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };

    error.message = err.message;

    // console.log(err);
    // res.status(500).json(err);

    //mongoose bad ObjectID
    if (err.name === "CastError") {
      const message = "Bad Request";
      error = new Error(message);
      error.statusCode = 400;
    }

    //mongoose duplicate key
    if (err.code === 11000) {
      const message = "Duplicate field value entered. Duplicate key error ";
      error = new Error(message);
      error.statusCode = 400;
    }

    // mongoose validation error
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new Error(message.join(", "));
      error.statusCode = 400;
    }

    res
      .status(error.statusCode || 500)
      .json({ success: false, message: error.message || "Server Error" });
  } catch (error) {
    next(error);
  }
};

export { errorMiddleware };
