const debug = process.env.NODE_ENV !== "production";
const optimizedImages = require("next-optimized-images");
const withCSS = require("@zeit/next-css");

module.exports = optimizedImages(
  withCSS({
    optimizeImagesInDev: true,
    exportPathMap: function() {
      return {
        "/": { page: "/" },
        "/about": { page: "/about" },
        "/calendar": { page: "/calendar" },
        "/contact": { page: "/contact" },
        "/home": { page: "/home" }
      };
    },
    assetPrefix: !debug ? "/satm/" : ""
  })
);
