const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts' , ".js", ".jsx"],
    alias: {
      '@': path.resolve(__dirname, 'app'),
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app'),
  },
};