/**
 * Middleware to handle async controller functions and errors.
 *
 * This function wraps an asynchronous route handler to catch errors
 * and forward them to error-handling middleware in the chain, and eliminates
 * the need for repetitive try-catch blocks in every controller function.
 *
 * @param {Function} requestHandlerFn - The async request handler function.
 * @returns {Function} A middleware function that catches errors.
 */

const asyncWrapper = (requestHandlerFn) => {
  return async (req, res, next) => {
    try {
      await requestHandlerFn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export { asyncWrapper };
