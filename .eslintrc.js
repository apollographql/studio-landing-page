module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "prettier", "plugin:eslint-comments/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@emotion", "react", "prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": ["error"],
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "no-use-before-define": "off",
    "import/no-extraneous-dependencies": "off",
  },
};
