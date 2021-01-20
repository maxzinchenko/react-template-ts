const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.[hash].js'
  }
};
