/*
 * Stylelint for common front-end projects with SCSS and Prettier support
 */

"use strict";

module.exports = {
  extends: ["stylelint-config-recommended", "stylelint-prettier/recommended"],
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true
  }
};
