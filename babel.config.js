module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screen': './src/screen',
          '@utils': './src/utils',
          '@navigators': './src/navigators',
          '@components': './src/components',
          '@redux': './src/redux',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
          '@data': './src/data',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
