const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
  mode: 'development',
  entry: './src/',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './public/build'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, './public/build')
    },
    historyApiFallback: true,
    port: 8080
  }
}

module.exports = merge(baseConfig, config)
