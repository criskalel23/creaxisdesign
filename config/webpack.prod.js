const helpers = require('./helpers');
const Merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = Merge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/[id].[hash].chunk.js'
  },
  
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.LoaderOptionsPlugin(
      {
        htmlLoader: {
          minimize: false // workaround for ng2
        }
      }
    ),

    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),

    new ExtractTextPlugin('assets/css/[name].css')
  ]
});