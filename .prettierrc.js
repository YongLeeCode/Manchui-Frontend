const baseConfig = require("./prettier/base");
const tailwindcssConfig = require("./prettier/tailwindcss");

module.exports = {
  ...baseConfig,
  ...tailwindcssConfig,
};
