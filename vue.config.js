const path = require("path");
module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? process.env.BUILD_BASE_URL : "/",
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("scss").oneOf(type))
    );
  },
  devServer: {
    host: "0.0.0.0",
    proxy: {
      "/api/*": {
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
