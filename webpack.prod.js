const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlCriticalPlugin = require("html-critical-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    ...common.plugins,
    new HtmlCriticalPlugin({
      base: path.join(path.resolve(__dirname), "dist/"),
      src: "index.html",
      dest: "index.html",
      inline: true,
      minify: true,
      extract: true,
      width: 375,
      height: 565,
      penthouse: {
        blockJSRequests: false,
      },
    }),
  ],
});
