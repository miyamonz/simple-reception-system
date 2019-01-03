const path = require("path");
const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.BUILD_BASE_URL_PROD
    : process.env.NODE_ENV === "test"
      ? process.env.BUILD_BASE_URL_TEST
      : "/";
module.exports = {
  baseUrl,
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("scss").oneOf(type))
    );
  },
  devServer: {
    host: "0.0.0.0",
    proxy: {
      "api/*": {
        target: "http://localhost:8000/",
        secure: false
      }
    }
  }
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/main.scss")]
    });
}
