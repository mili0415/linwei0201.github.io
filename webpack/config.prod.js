const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      { resolve,  webpackModule, resolveLoader } = require('./config.common'),
      syncMDFilePlugin = require('./plugins/syncFile/syncMDFilesPlugin')

const config = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: "http://127.0.0.1:8080"
  },
  module: webpackModule,
  resolve,
  resolveLoader,
  plugins: [
    new HtmlWebpackPlugin({
      title: "线上",
      hash: false,
      inject: false,
      window: {
        'ENV': 'dev'
      },
      // envFile: null,
      filename: 'index.html',
      favicon: '',
      template: 'src/templates/index.ejs'
    }),
    new syncMDFilePlugin()
  ]
};

module.exports = config;
