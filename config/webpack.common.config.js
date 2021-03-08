const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$|tsx$/,
      include: [path.resolve(__dirname, '..', 'src')],
      exclude: ['/node_modules/'],
      loader: 'ts-loader'
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(png|jp(e*)g)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8000
        }
      }
    }, {
      test: /\.ico$/,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]'
      }
    }, {
      test: /\.woff(2)?(\?v=\d\.\d\.\d)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      }
    }, {
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: path.resolve(__dirname, '..', 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new Dotenv({
      path: './.env'
    })
  ]
};
