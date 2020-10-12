const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        open: true,
        port: 9999
    },
    devtool: 'source-map',
    resolve: {
        //默认在跟目录下查找，如果没有再去node_modules查找
        modules: [path.resolve(__dirname, ''), path.resolve(__dirname, 'node_modules')]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ]
}