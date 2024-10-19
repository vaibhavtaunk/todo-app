// middlewares/errorMiddleware.js
module.exports = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: 'error',
    statusCode: err.statusCode || 500,
    message: err.message || 'Internal Server Error',
  });
};
