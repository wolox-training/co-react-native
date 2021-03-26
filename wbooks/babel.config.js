module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-glob',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src/app',
          '@assets': './src/app/assets',
          '@componets': './src/app/components',
          '@hooks': './src/app/hooks',
          '@screens': './src/app/screens',
          '@config': './src/config',
          '@constants': './src/constants',
          '@interfaces': './src/interfaces',
          '@redux': './src/redux',
          '@services': './src/services',
          '@utils': './src/utils'
        }
      }
    ]
  ]
};
