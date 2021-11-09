var HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname + '/public' + '/index.html'),
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: [/\.?js$/, /\.?jsx$/],
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }
        ]
    },
    entry: path.join(__dirname + '/src' + '/index.js'),
    plugins: [HTMLWebpackPluginConfig],
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    // output: {
    //     publicPath: '/dist/'
    // },
    externals: {
        config: JSON.stringify({
            apiUrl: 'http://10.1.10.149:3030/api'
            // apiUrl: 'http://192.168.1.13:3030/api'
        })
    }
}