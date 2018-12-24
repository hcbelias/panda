const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const devMode = process.env.ENV_MODE !== "production";
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: devMode ? "development" : "production",
  target: "web",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  entry: {
    polyfill: "babel-polyfill",
    app: "./src/index.js"

    //"webpack-dev-server/client?http://localhost:8080"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Panda Payroll"
    })
  ],
  module: {
    rules: [
      //Styles
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
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
      //CSS
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      }
    ]
  }
};
