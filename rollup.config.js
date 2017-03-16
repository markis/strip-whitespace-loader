var typescript = require('rollup-plugin-typescript');

module.exports = {
  entry: './src/index.ts',
  dest: 'index.js',
  format: 'cjs',
  moduleId: 'strip-whitespace-loader',
  moduleName: 'strip-whitespace-loader',
  external: [
    'assert',
    'fs',
    'path',
    'strip-whitespace',
    'typescript'
  ],
  plugins: [
    typescript({
      typescript: require('typescript')
    }),
  ]
};