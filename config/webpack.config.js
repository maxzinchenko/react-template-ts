const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.config');
const developmentConfig = require('./webpack.development.config');
const productionConfig = require('./webpack.production.config');

module.exports = (_, { mode }) => {
  switch (mode) {
    case 'development':
      return merge(commonConfig, developmentConfig, { mode });
    case 'production':
      return merge(commonConfig, productionConfig, { mode });
    default:
      throw new Error('No matching configuration was found!');
  }
}
