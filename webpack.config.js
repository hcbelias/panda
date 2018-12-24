const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const devMode = process.env.ENV_MODE !== "production";
const webpack = require("webpack");

module.exports = {
  mode: devMode ? "development" : "production",
  target: "web",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  entry: {
    polyfill: "babel-polyfill",
    app: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
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
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      //Images
      {
        test: /\.(png|svg|jpg|gif)$/,
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
        use: { loader: "html-loader" }
      },
      //PUG - JADE
      {
        include: /\.pug$/,
        loader: ["html-loader", "pug-html-loader"]
      }
    ]
  }
};
