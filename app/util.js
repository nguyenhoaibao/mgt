module.exports = {
  getEnv(key, defaultValue = '') {
    if (!key) {
      return defaultValue;
    }

    return process.env[key] || defaultValue;
  }
};
