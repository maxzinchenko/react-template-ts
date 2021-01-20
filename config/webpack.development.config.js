module.exports = {
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080,
    proxy: {
      '/api': `http://localhost:${ process.env.API_PORT || 3000 }`
    }
  }
};
