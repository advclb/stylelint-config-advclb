"use strict";

module.exports = {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    // Color
    "color-named": "never",
    "color-hex-length": "long",

    // Order
    "order/order": ["custom-properties", "declarations"],
    // Full list https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
    // Group info https://www.tutorialrepublic.com/css-reference/css3-properties.php
    "order/properties-order": [
      [
        {
          groupName: "positioning",
          noEmptyLineBetween: true,
          properties: ["position", "top", "bottom", "left", "right", "z-index"]
        },
        {
          groupName: "sizing",
          noEmptyLineBetween: true,
          properties: [
            "display",
            "box-sizing",
            "width",
            "height",
            "max-width",
            "max-height",
            "min-width",
            "min-height",
            "margin",
            "margin-top",
            "margin-bottom",
            "margin-left",
            "margin-right",
            "padding",
            "padding-top",
            "padding-bottom",
            "padding-left",
            "padding-right"
          ]
        },
        {
          groupName: "flex-children",
          noEmptyLineBetween: true,
          properties: [
            "order",
            "flex",
            "flex-grow",
            "flex-shrink",
            "flex-basis"
          ]
        },
        {
          groupName: "grid-children",
          noEmptyLineBetween: true,
          properties: [
            "grid-column-start",
            "grid-column-end",
            "grid-row-start",
            "grid-row-end",
            "grid-column",
            "grid-row",
            "grid-area"
          ]
        },
        {
          groupName: "flex-grid-children-place",
          noEmptyLineBetween: true,
          properties: ["place-self", "justify-self", "align-self"]
        },
        {
          groupName: "flex-parent",
          noEmptyLineBetween: true,
          properties: ["flex-flow", "flex-direction", "flex-wrap"]
        },
        {
          groupName: "grid-parent",
          noEmptyLineBetween: true,
          properties: [
            "grid",
            "grid-template",
            "grid-template-columns",
            "grid-template-rows",
            "grid-template-areas",
            "grid-gap",
            "grid-column-gap",
            "grid-row-gap",
            "grid-auto-flow",
            "grid-auto-columns",
            "grid-auto-rows"
          ]
        },
        {
          groupName: "flex-grid-parent-place",
          noEmptyLineBetween: true,
          properties: [
            "place-items",
            "justify-items",
            "align-items",
            "place-content",
            "justify-content",
            "align-content"
          ]
        },
        {
          groupName: "multi-column-layout",
          noEmptyLineBetween: true,
          properties: [
            "columns",
            "column-count",
            "column-fill",
            "column-gap",
            "column-rule",
            "column-rule-color",
            "column-rule-style",
            "column-rule-width",
            "column-span",
            "column-width"
          ]
        },
        {
          groupName: "border",
          noEmptyLineBetween: true,
          properties: [
            "border",
            "border-color",
            "border-width",
            "border-style",
            "border-top",
            "border-top-color",
            "border-top-width",
            "border-top-style",
            "border-bottom",
            "border-bottom-color",
            "border-bottom-width",
            "border-bottom-style",
            "border-left",
            "border-left-color",
            "border-left-width",
            "border-left-style",
            "border-right",
            "border-right-color",
            "border-right-width",
            "border-right-style",
            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-right-radius",
            "border-bottom-left-radius",
            "border-image",
            "border-image-outset",
            "border-image-repeat",
            "border-image-slice",
            "border-image-source",
            "border-image-width"
          ]
        },
        {
          groupName: "outline",
          noEmptyLineBetween: true,
          properties: [
            "outline",
            "outline-color",
            "outline-offset",
            "outline-style",
            "outline-width"
          ]
        },
        {
          groupName: "background",
          noEmptyLineBetween: true,
          properties: [
            "background",
            "background-attachment",
            "background-clip",
            "background-color",
            "background-image",
            "background-position",
            "background-repeat",
            "background-size"
          ]
        },
        {
          groupName: "list",
          noEmptyLineBetween: true,
          properties: [
            "list-style",
            "list-style-image",
            "list-style-position",
            "list-style-type"
          ]
        },
        {
          groupName: "table",
          noEmptyLineBetween: true,
          properties: [
            "table-layout",
            "border-collapse",
            "border-spacing",
            "caption-side",
            "empty-cells"
          ]
        },
        {
          groupName: "before-after",
          noEmptyLineBetween: true,
          properties: [
            "content",
            "quotes",
            "counter-reset",
            "counter-increment"
          ]
        },
        {
          groupName: "text",
          noEmptyLineBetween: true,
          properties: [
            "color",
            "direction",
            "line-height",
            "letter-spacing",
            "tab-size",
            "text-align",
            "text-align-last",
            "text-decoration",
            "text-decoration-color",
            "text-decoration-line",
            "text-decoration-style",
            "text-indent",
            "text-justify",
            "text-overflow",
            "text-shadow",
            "text-transform",
            "word-spacing",
            "word-break",
            "word-wrap",
            "white-space",
            "vertical-align"
          ]
        },
        {
          groupName: "font",
          noEmptyLineBetween: true,
          properties: [
            "font",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight"
          ]
        },
        {
          groupName: "appearance",
          noEmptyLineBetween: true,
          properties: [
            "appearance",
            "box-shadow",
            "clear",
            "clip",
            "cursor",
            "float",
            "opacity",
            "overflow",
            "overflow-x",
            "overflow-y",
            "resize",
            "visibility"
          ]
        },
        {
          groupName: "transform",
          noEmptyLineBetween: true,
          properties: [
            "transform",
            "transform-origin",
            "transform-style",
            "perspective",
            "perspective-origin",
            "backface-visibility"
          ]
        },
        {
          groupName: "animation-transition",
          noEmptyLineBetween: true,
          properties: [
            "animation",
            "animation-delay",
            "animation-direction",
            "animation-duration",
            "animation-fill-mode",
            "animation-iteration-count",
            "animation-name",
            "animation-play-state",
            "animation-timing-function",
            "transition",
            "transition-delay",
            "transition-duration",
            "transition-property",
            "transition-timing-function"
          ]
        }
      ],
      { unspecified: "bottomAlphabetical" }
    ],

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
    "scss/dollar-variable-no-missing-interpolation": true
  }
};
