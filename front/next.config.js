const withLinaria = require('next-linaria');

const env = require('./env');

module.exports = withLinaria({
  publicRuntimeConfig: env,
});
