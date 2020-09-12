const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const analyzeBundle = process.env.ANALYZE === 'true';

module.exports = {
  context: __dirname,
  mode: isProduction ? 'production' : 'development',
  entry: {
    app: './app/index.tsx',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: isProduction ? 'source-map' : 'eval-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css'],
    alias: {
      '@': path.resolve(__dirname, './app'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      { test: /\.(a?png|svg)$/, use: 'url-loader?limit=10000' },
      {
        test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
        use: 'file-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'app/assets/index.html' }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      // For the dev server overlay to work
      async: false,
    }),
    isProduction ? false : new webpack.HotModuleReplacementPlugin(),
    analyzeBundle ? new BundleAnalyzerPlugin() : false,
  ].filter(Boolean),
  devtool: isProduction ? 'hidden-source-map' : 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    port: 9111,
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    },
    overlay: true,
    stats: 'minimal',
  },
}