const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        //modules: ['node_modules', helpers.root('src')],
        extensions: ['.js', '.ts', '.json', '.css', '.html', '.scss']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: helpers.root('src', 'tsconfig.json')}
                    },
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                //use: ['html-loader?attrs[]=video:src']
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['video:src', 'img:src']
                    }
                }
            },
            {
                test: /\.mp4$/,
                use: ['url-loader?limit=10000&mimetype=video/mp4']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {   loader: 'css-loader' },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer')(),
                                ]
                            }
                        }
                    ]
                }) 
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['raw-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/css/fonts/[name].[ext]'
                        }
                    }
                ]
            },
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),
      
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Creaxis Design',
            favicon: './src/favicon.ico'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}