module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: '@react-native',
  rules: {
    "react-hooks/exhaustive-deps": "off",
   "quotes": ["off"],
  },
};