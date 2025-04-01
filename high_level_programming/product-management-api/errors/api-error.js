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

export { customError, CustomAPIError };
