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
  module: {
    style: {
      modules: {
        localIdentName: "[name]__[local]__[hash:base64:5]"
      },
      css: {
        loaderOptions: {
          modules: {
            localIdentName: "[name]__[local]__[hash:base64:5]"
          }
        }
      }
    }
  }
};
