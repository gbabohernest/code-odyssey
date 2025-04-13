import { StatusCodes, getReasonPhrase } from 'http-status-codes';

/**
 *  Custom error middleware
 * @param err
 * @param req
 * @param res
 * @param next
 */

const { BAD_REQUEST, INTERNAL_SERVER_ERROR } = StatusCodes;

const errorMiddleware = (err, req, res, next) => {
  let statusCode = err.statusCode || INTERNAL_SERVER_ERROR;
  let message = err.message || getReasonPhrase(INTERNAL_SERVER_ERROR);

  //mongoose bad ObjectID
  if (err.name === 'CastError') {
    message = 'Bad Request, Invalid ID format';
    statusCode = BAD_REQUEST;
  }

  //mongoose duplicate key
  if (err.code === 11000) {
    message = 'Duplicate field value entered. Duplicate key error ';
    statusCode = BAD_REQUEST;
  }

  // mongoose validation error
  if (err.name === 'ValidationError') {
    if (err.errors) {
      const messages = Object.values(err.errors).map((value) => value.message);
      message = messages.join(', ');
      statusCode = BAD_REQUEST;
    }
  }

  res.status(statusCode).json({ success: false, message });
};

export { errorMiddleware };
