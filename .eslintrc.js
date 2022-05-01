module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "standard-with-typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "@vue/eslint-config-prettier",
    "@vue/prettier",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
    sourceType: "module",
    extraFileExtensions: [".vue", ".d.ts"],
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": ["error", { singleQuote: false }],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ], //模板中组件名PascalCase
    "vue/name-property-casing": ["error", "PascalCase"], //组件名PascalCase
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
      files: ["src/**/*.spec.ts"],
      rules: {
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};
