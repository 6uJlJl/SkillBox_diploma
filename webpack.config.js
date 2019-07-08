const path = require('path');

module.exports = {
  entry: {
    '/js/' : './src/index.js',
    '/auth/js/' : './auth/src/indexauth.js'
  },
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
    filename: '[name]bundle.js',
    path: path.resolve(__dirname, '')
  },
  devServer: {
    historyApiFallback: true,
  }
}
;
