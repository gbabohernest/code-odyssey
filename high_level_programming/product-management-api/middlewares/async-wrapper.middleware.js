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

export { asyncMiddleware };
