import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { string } from 'rollup-plugin-string'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm'
    },
    {
      name: 'ReactEasySpinners',
      file: 'dist/bundle.umd.js',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      },
      format: 'umd'
    }
  ],
  external: ['react'],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    string({
      include: '**/*.css'
    }),
    production && terser()
  ]
}
