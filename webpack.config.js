const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const contentScripts = {
  entry: './src/content-scripts/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  optimization: {
    minimize: true,
  },
  devtool: false,
  watchOptions: {
    ignored: ['node_modules', 'extension/**/*.js', 'extension/**/*.css'],
    poll: 1000,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/content-scripts'),
  },
};

const popup = {
  entry: './src/popup/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/popup/index.html',
      filename: 'index.html',
    }),
  ],
  devtool: false,
  optimization: {
    minimize: true,
  },
  watchOptions: {
    ignored: ['node_modules', 'extension/**/*.js', 'extension/**/*.css'],
    poll: 1000,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/popup'),
  },
};

module.exports = [contentScripts, popup];
