const helpers = require('./helpers');
const Merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = Merge( commonConfig, {
    watch: true,

    devtool: 'cheap-module-eval-source-map',
    // devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: 'assets/js/[name].js',
        chunkFilename: 'assets/js/[id].chunk.js'
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }, 

    plugins: [
        new ExtractTextPlugin('assets/css/[name].css'),
    ]          

})