"use strict";

const pattern = "^ac-[a-z0-9-]";

module.exports = {
  plugins: ["stylelint-scss"],
  rules: {
    "scss/at-function-pattern": pattern,
    "scss/at-mixin-pattern": pattern,
    "scss/dollar-variable-default": [true, { ignore: "local" }],
    "scss/dollar-variable-pattern": [pattern, { ignore: "local" }],
    "scss/percent-placeholder-pattern": [pattern]
  }
};
