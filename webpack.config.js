const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "client", "src", 'index.js'),
  output: { path: path.resolve(__dirname, "client", "dist") },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: {
          loader: 'style-loader!css-loader'
        }
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
        }
      }
    ],
  },
};
