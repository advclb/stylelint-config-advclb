"use strict";

module.exports = {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  plugins: ["stylelint-scss"],
  rules: {
    // Color
    "color-named": "never",
    "color-hex-length": "long",

    // SCSS @mixin, @include, @extend, etc.
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,

    // SCSS @each
    "scss/at-each-key-value-single-line": true,

    // SCSS @if @else
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-if-closing-brace-space-after": "always-intermediate",
    "scss/at-if-no-null": true,
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-closing-brace-space-after": "always-intermediate",
    "scss/at-else-empty-line-before": "never",
    "scss/at-else-if-parentheses-space-before": "always",

    // SCSS @extend
    "scss/at-extend-no-missing-placeholder": true,

    // SCSS @function
    "scss/at-function-named-arguments": "never",
    "scss/at-function-parentheses-space-before": "never",

    // SCSS @import
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension": "never",
    "scss/at-import-partial-extension-blacklist": ["css", "sass", "scss"],

    // SCSS @mixin
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/at-mixin-named-arguments": "never",
    "scss/at-mixin-parentheses-space-before": "never",

    // SCSS $variable
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-empty-line-before": [
      "always",
      { except: ["first-nested", "after-comment", "after-dollar-variable"] }
    ],
    "scss/dollar-variable-no-missing-interpolation": true,

    // SCSS //comment
    "scss/comment-no-loud": true
  }
};
