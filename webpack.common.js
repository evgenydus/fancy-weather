const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
