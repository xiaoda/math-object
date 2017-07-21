const path = require('path')
const webpack = require('webpack')

let defaultConf = {
  module: {
    rules: {
      eslint: {
        enforce: 'pre',
        test: /\.js?$/,
        include: [path.resolve(__dirname, '../src')],
        loader: 'eslint-loader',
        options: {
          failOnWarning: true,
          failOnError: true
        }
      },
      babel: {
        test: /\.js?$/,
        include: [path.resolve(__dirname, '../src')],
        loader: 'babel-loader',
        options: {
          presets: ['latest', 'stage-1']
        }
      }
    }
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '../src')],
    extensions: ['.js', '.json']
  },
  plugins: {
    define: new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    provide: new webpack.ProvidePlugin({
      config: 'general/config',
      helper: 'general/helper',
      util: 'general/util'
    })
  }
}

module.exports = defaultConf
