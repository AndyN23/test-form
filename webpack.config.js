const path = require ('path')
const HTMLWebpackPlugin = require ('html-webpack-plugin')
const {CleanWebpackPlugin} = require ('clean-webpack-plugin')
const MiniCssExtractPlugin =  require ('mini-css-extract-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        toggle: './toggle.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader'
                ], 
            },
            {
                test: /\.(png|svg|woff2)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'sass-loader'
                ], 
            },
        ]
    }
}
