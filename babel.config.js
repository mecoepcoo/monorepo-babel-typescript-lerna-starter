export default {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: '3.15'
      }
    ],
    '@babel/preset-typescript'
  ],
  ignore: ['node_modules']
}
