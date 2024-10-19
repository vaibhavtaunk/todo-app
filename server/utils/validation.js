// utils/validation.js
exports.isValidTitle = (title) => {
  return typeof title === 'string' && title.trim() !== '';
};
