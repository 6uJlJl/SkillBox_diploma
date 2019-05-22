const path = require('path');

module.exports = {
  entry: './src/indexauth.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundleauth.js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    historyApiFallback: true,
  }
};
