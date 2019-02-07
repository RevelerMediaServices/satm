// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== "production";
const optimizedImages = require("next-optimized-images");

module.exports = optimizedImages({
  optimizeImagesInDev: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/calendar": { page: "/calendar" },
      contact: { page: "/contact" }
    };
  },
  assetPrefix: !debug ? "/satm/" : ""
});
