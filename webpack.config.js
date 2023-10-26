const path = require('path');
const HTMLWEbpackPLugin = require('html-webpack-plugin')
const {CleanWebpackPlugin}= require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry:{
        main: './js/script.js' 
    },
    output:{
        path: path.resolve(__dirname,'dist' ),
        filename: '[name].js',
        // assetModuleFilename: pathData => {
        //     const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
        //     return `${filepath}/[name][ext]`;
        // },
        assetModuleFilename: './[name][ext]'
    },
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    plugins:[
        new HTMLWEbpackPLugin({
            filename: 'index.html',
            template: './pages/main/index.html'
        }),
        new HTMLWEbpackPLugin({
            filename: 'pets.html',
            template: './pages/pets/pets.html'
        }),
        new CleanWebpackPlugin()
        , new CopyPlugin({
            patterns: [
              { from: "./assets/images/", to: "./assets/images/" },
              { from: "./assets/icons/", to: "./assets/icons/" }
            ],
          })
          
    ],
    module:{
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
            ,
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
                generator:{
                    filename:'./assets/fonts/[name].[ext]'
                }
              },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    }
}