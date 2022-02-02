const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: { 
    //'index': 'index.js',//__dirname + "/src/app/index.js", 
    'index': './js/cards/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',//filename: '[name].[contenthash].js',
    //path: __dirname + '/dist',
    //filename: 'bundle.js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    modules: [
      path.resolve(__dirname + '/node_modules'),
      path.resolve(__dirname + '/src'),
    ],
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 3000
  },
  module: {
      rules: [
          {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: [
              /node_modules/
            ]
          }, 
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract(
              {
                fallback: 'style-loader',
                use: [{
                    loader: "css-loader",
                    options: {
                      sourceMap: true,
                      //url: false
                    }
                  },
                  {
                    loader: 'resolve-url-loader',
                    //options:{
                    //  engine:'rework',
                    //}
                  },
                  {
                    loader: "sass-loader",
                    options: {
                      sourceMap: true,
                      //sassOptions: {
                      //}
                    }
                  },
                ]
              }
              )
            },
          {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
            "pretty":true
            }
          },
          {
            test: /\.(jpeg|jpg|png|svg)(\?v=\d+\.\d+\.\d+)?$/,
            exclude: [
              path.resolve(__dirname, "src/assets/fonts/")
            ],
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/img/',
              outputPath: 'img/'
            },
          },
          {
            test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            //include: [
            //  path.resolve(__dirname, "src/assets/fonts/")
            //],
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/fonts/',
              outputPath: 'fonts/'
            }
          },
      ]
  },
  plugins: [
              //new HtmlWebpackPlugin({
              //  template: `./index.pug`,//__dirname + "/src/pug/ui-kit/cards/cards.pug",
              //  filename: 'index.html',
              //  chunks: ['index'],
                //inject: 'body'
              //}),
              //new ExtractTextPlugin(
              //  {filename: 'index.css'}
              //),
              new HtmlWebpackPlugin({
                template: `./pug/ui-kit/form-elements/form-elements.pug`,//__dirname + "/src/pug/ui-kit/form-elements/form-elements.pug",
                filename: 'index.html',
                chunks: ['index'],
                inject: 'body'
              }),
              new ExtractTextPlugin(
                {filename: 'index.css'}
              ),
              new CleanWebpackPlugin(),
              //new ExtractTextPlugin('[name].css'),
  ],
  devServer: {
      //-contentBase: path.join(__dirname, 'dist'),//[path.resolve(__dirname, "public"), path.resolve(__dirname, "assets")],
      compress: true,
      port: 7700,
      historyApiFallback: true,
  }
};
