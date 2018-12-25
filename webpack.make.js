const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const publishFolder = "./dist";

module.exports = function makeWebpackConfig(options) {
  const PROD = !!options.PROD;
  let config = {
    mode: PROD ? "production" : "development",
    target: "web",
    devServer: {
      contentBase: publishFolder,
      hot: !PROD
    },
    entry: {
      polyfill: "babel-polyfill",
      app: "./src/index.js"
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, publishFolder)
    },
    plugins: [
      new CleanWebpackPlugin([publishFolder]),
      new HtmlWebpackPlugin({
        title: "Panda Payroll"
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      rules: [
        //Styles
        {
          test: /\.(c|sc)ss$/,
          exclude: /node_modules/,
          use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        },
        //Images
        {
          test: /\.(png|svg|jpg|gif)$/,
          exclude: /node_modules/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images/"
            }
          }
        },
        //Fonts
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          exclude: /node_modules/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/fonts/"
            }
          }
        },
        //HTML
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: { loader: "html-loader" }
        },
        //PUG
        {
          include: /\.pug$/,
          exclude: /node_modules/,
          loader: ["html-loader", "pug-html-loader"]
        },
        //ESLINT
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader"
        }
      ]
    }
  };

  if (!PROD) {
    config.devtool = "inline-source-map";
  }
  return config;
};
