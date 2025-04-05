const customErrorMiddleware = (err, req, res, next) => {
  try {
    res.status(500).json({ success: false, message: err.message });
  } catch (error) {
    next(error);
  }
};

module.exports = customErrorMiddleware;
