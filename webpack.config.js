const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    popup:  './source/popup.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
            }
        }
    }],
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./source/popup.html",
    filename: "popup.html",
  }),
  new CopyPlugin({
    patterns: [
      { from: "public" }
    ],
  }),
],
};
