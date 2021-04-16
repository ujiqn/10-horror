const isProd = process.env.NODE_ENV === 'production';
const url = isProd ? '/10-horror/' : '';

module.exports = {
  assetPrefix: url,
  trailingSlash: true,
  future: {
    webpack5: true
  }
};