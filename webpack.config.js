const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { MODE, dynamic_hash } = require('./library/constants/global');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
 

  let hash = dynamic_hash.non;
module.exports = {
  mode: MODE,
  entry: {
    app: path.resolve(__dirname, 'src', 'app', 'js', 'app.js'),
    ['relationships-builders']: path.resolve(__dirname, 'src', 'app', 'js', 'app.js'),
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname.replace('webpack', ''), 'dist'),
    filename: ({ chunk: name }) => {
      return name === 'main'
        ? `[name]${hash}.js`
        : `[name]/[name]${hash}.js`;
    },
    clean: true,
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/, // Ensure both .js and .jsx files are processed
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allow imports without specifying .jsx extension
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: ({ chunk: { name } }) => {
        return name === 'main'
          ? `[name]${hash}.css`
          : `[name]/[name]${hash}.css`;
      },
    }),
  ],
  devtool: 'source-map',
};