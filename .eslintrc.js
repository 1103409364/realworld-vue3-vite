module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    extraFileExtensions: [".vue"],
  },
  extends: [
    // '@mutoe/eslint-config-preset-vue',
    "plugin:vue/vue3-recommended",
    "standard-with-typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "@vue/eslint-config-prettier",
    "@vue/prettier",
    "plugin:cypress/recommended",
    "plugin:chai-friendly/recommended",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": ["error", { singleQuote: false }],
    "no-undef": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "vue/multi-word-component-names": "off",
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ], //模板中组件名PascalCase
    "vue/component-definition-name-casing": ["error", "PascalCase"], //组件名PascalCase
    "vue/match-component-file-name": [
      "error",
      {
        extensions: ["vue"],
        shouldMatchCase: true,
      },
    ], //要求组件name属性匹配其文件名
    "vue/prop-name-casing": ["error", "camelCase"], //组件props camelCase
    "vue/this-in-template": ["error", "never"], //不要在模版中使用this
    "vue/custom-event-name-casing": ["error", "kebab-case"], //自定义事件名称始终使用kebab-case(短横线命名)
    "vue/attribute-hyphenation": [
      "error",
      "always",
      {
        ignore: [],
      },
    ], //标签属性名称始终使用kebab-case(短横线命名)
    "vue/attributes-order": [
      "error",
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          "UNIQUE",
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT",
        ],
      },
    ], //标签属性、指令排序
  },
  overrides: [
    {
      files: ["src/composable/*.ts", "src/**/use*.ts"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: ["src/**/*.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: [
        "plugin:cypress/recommended",
        "plugin:chai-friendly/recommended",
      ],
    },
  ],
};
