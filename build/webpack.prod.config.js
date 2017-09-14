const path = require('path')
const webpack = require('webpack')
const baseConf = require('./webpack.base.config')

let webpackConf = {
  entry: {
    index: '../src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    library: 'mo',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      baseConf.module.rules.eslint,
      baseConf.module.rules.babel
    ]
  },
  resolve: baseConf.resolve,
  devtool: 'source-map',
  context: path.join(__dirname, '../public'),
  stats: 'errors-only',
  plugins: [
    baseConf.plugins.define,
    baseConf.plugins.provide
  ]
}

module.exports = webpackConf
