/**
 * Middleware to handle async controller function
 */

const asyncMiddleware = (handlerFn) => {
  return async (req, res, next) => {
    try {
      await handlerFn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

/**
 * Handles custom Error
 */
class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

/**
 * Return a CustomAPIError instance.
 * @param message - Error message
 * @param status - Error Code
 * @returns {CustomAPIError} - An instance of CustomAPIError
 */
const customError = (message, status) => {
  return new CustomAPIError(message.status);
};

export { asyncMiddleware, customError, CustomAPIError };
