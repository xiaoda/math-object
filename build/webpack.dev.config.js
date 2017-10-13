const path = require('path')
const webpack = require('webpack')
const baseConf = require('./webpack.base.config')

let webpackConf = {
  entry: {
    index: '../public/index.js'
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      baseConf.module.rules.eslint,
      baseConf.module.rules.babel,
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, '../public')],
        loader: 'babel-loader',
        options: {
          presets: ['latest', 'stage-1']
        }
      }
    ]
  },
  resolve: baseConf.resolve,
  devtool: 'source-map',
  context: path.join(__dirname, '../public'),
  stats: 'errors-only',
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    compress: true,
    port: 9002,
    historyApiFallback: true,
    https: false,
    noInfo: true
  },
  plugins: [
    baseConf.plugins.define
  ]
}

module.exports = webpackConf
