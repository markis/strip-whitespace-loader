var typescript = require('rollup-plugin-typescript');

module.exports = {
  input: './src/index.ts',
  output: {
    file: 'index.js',
    format: 'cjs',
    name: 'strip-whitespace-loader',
    sourcemap: true,
  },
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