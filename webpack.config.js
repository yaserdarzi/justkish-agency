const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const port = process.env.PORT || 3010;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
        },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s?css$/,  // scss & css files
                use: [ 'style-loader', 'css-loader' ]
                
            },
            {test: /\.(jpe?g|png|gif|svg)$/i, loader: "url-loader?name=src/[name].[ext]"},
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
            
        ] 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
    }
}; 