module.exports = function (str, suffix) {
  return typeof str === 'string' && str.endsWith(suffix);
};
