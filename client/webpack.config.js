const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpack = require('webpack');

var path = require('path');

// variables
var sourcePath = path.join(__dirname, './src');
var outPath = path.join(__dirname, './dist');

// helper methods
const extractLess = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: process.env.NODE_ENV === 'development'
});

// webpack configuration
module.exports = {
    context: sourcePath,
    entry: {
        main: './app.tsx',
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'redux'
        ]
    },
    output: {
        path: outPath,
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    externals: {
        'react/addons': true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: isProduction
                ? 'awesome-typescript-loader?module=es6'
                : [
                    'react-hot-loader',
                    'awesome-typescript-loader'
                ],
                exclude: /node_modules/
            },
            { 
                test: /\.html$/, 
                use: 'html-loader' 
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            sourceMap: true,
                            importLoaders: 2,
                            localIdentName: '[local]__[hash:base64:5]'
                        }
                    }, {
                        loader: 'less-loader'
                    }],
                    fallback: 'style-loader'
                })
            },
            { 
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, 
                use: 'url-loader' 
            }
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        extractLess,
        new webpack.WatchIgnorePlugin([
            /css\.d\.ts$/
        ])
    ],
    devServer: {
        contentBase: sourcePath
    }
};