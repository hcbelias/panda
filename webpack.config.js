const path = require("path");
const devMode = process.env.NODE_ENV !== "production";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  target: "web",
  entry: [
    "babel-polyfill",
    "./src/main.js",
    "webpack-dev-server/client?http://localhost:8080"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    watchContentBase: true,
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/, // less or CSS
        use: [
          { loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      }
    ]
  }
};
