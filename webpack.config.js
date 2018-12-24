const path = require("path");
//const devMode = process.env.NODE_ENV !== "production";
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  target: "web",
  entry: [
    "babel-polyfill",
    "./src/index.js"
    //"webpack-dev-server/client?http://localhost:8080"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  //  devServer: {
  //   watchContentBase: true,
  //  compress: true
  //},
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
