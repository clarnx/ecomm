const path = require("path");
var webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: './src/index.js',
  output: {
    path: path.join(__dirname, "/dist"), 
    filename: "bundle.js", 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html", 
    }),

  ],
  devServer: {
    port: 3030, 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|scss)$/, 
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: "url-loader",
        options: { limit: false },
      },
           
      
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

    ],
  },
};
