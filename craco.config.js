const { CracoAliasPlugin } = require("react-app-alias");

const options = {};

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "./tsconfig.json"
      }
    }
  ],
  rules: [
    {
      test: /\.scss$/,
      use: [
        { loader: "style-loader" },
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: "[local]_[hash:base64:5]"
          }
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            config: {
              path: "postcss.config.js"
            }
          }
        },
        {
          loader: "sass-loader",
          options: { sourceMap: true }
        }
      ]
    }
  ]
};
