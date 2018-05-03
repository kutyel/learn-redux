const { join } = require('path')
const Dotenv = require('dotenv-webpack')
const { HotModuleReplacementPlugin, NoErrorsPlugin } = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: ['webpack-hot-middleware/client', './client'],
  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new NoErrorsPlugin(),
    new Dotenv()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: join(__dirname, 'client')
      },
      {
        test: /\.css$/,
        include: join(__dirname, 'client'),
        loader: 'style-loader!css-loader!'
      }
    ]
  }
}
