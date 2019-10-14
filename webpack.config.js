const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin');

const DIST_DIR = path.resolve(__dirname, './dist'),
  SRC_DIR = path.resolve(__dirname, './src');

const config = {
  mode: 'development',
  entry: SRC_DIR + '/App.jsx',
  output: {
    path: DIST_DIR,
    filename: 'js/main.js',
    publicPath: '/',
    crossOriginLoading: 'use-credentials',
  },
  module: {
    rules: [
      {
        test: [/.js$|.jsx$/],
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: [/.css$|.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?prefix=font/&limit=5000',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader:
          'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.jsx?$/,
        },
        use: [
          'babel-loader',
          '@svgr/webpack',
          'url-loader',
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/png',
      },
      {
        test: /\.gif(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/gif',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    port: 8080,
    writeToDisk: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
  ],
  resolve: {
    alias: {
      jquery: 'node_modules/jquery/dist/jquery.min.js',
    },
  },
};

module.exports = config;
