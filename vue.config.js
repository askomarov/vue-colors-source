const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/vue-colors/" : "/",
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/sass/variables.scss";
        `,
      },
    },
  },
});
