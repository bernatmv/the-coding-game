const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpack = require('webpack');

const path = require('path');

// variables
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './dist');

const extractLess = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: process.env.NODE_ENV === 'development'
});

function isVendor(module) {
    return module.context && module.context.indexOf('node_modules') !== -1;
}

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
                use: [
                    'react-hot-loader',
                    'awesome-typescript-loader'
                ],
                exclude: /node_modules/
            },
            { 
                enforce: 'pre', 
                test: /\.js$/, 
                loader: 'source-map-loader' 
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
            minChunks: function (module, count) {
                // creates a common vendor js file for libraries in node_modules
                return isVendor(module);
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.bundle.js',
            chunks: ['main'],
            minChunks: function (module, count) {
                // creates a common js file for code not in node_modules and repeated more than 1 time
                return !isVendor(module) && count > 1;
            }
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