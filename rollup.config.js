import path from 'path'
import { merge } from 'lodash'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import nodeResolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'

const resolve = function(...args) {
  return path.resolve(__dirname, ...args)
}

const { LERNA_PACKAGE_NAME, LERNA_ROOT_PATH } = process.env
const PACKAGE_PATH = process.cwd()
const INPUT_FILE = path.join(PACKAGE_PATH, 'src/index.ts')
const OUTPUT_DIR = path.join(PACKAGE_PATH)

const pkg = require(path.join(PACKAGE_PATH, 'package.json'))

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
]

const { name, version } = pkg

const output = [
  {
    format: 'esm',
    file: path.join(OUTPUT_DIR, pkg.module),
  },
  {
    format: 'cjs',
    file: path.join(OUTPUT_DIR, pkg.main),
  },
  {
    format: 'umd',
    name: pkg.buildOptions.name,
    file: path.join(OUTPUT_DIR, pkg.unpkg),
  },
]

function createConfig(input, output, plugins = [], override) {
  return merge({
    input,
    output,
    plugins: [
      // replace({
      //   preventAssignment: true,
      //   exclude: 'node_modules/**',
      //   __VERSION__: JSON.stringify(version),
      // }),
      nodeResolve({ extensions }),
      // commonjs(),
      // json(),
      babel({
        extensions,
        babelHelpers: 'bundled',
        "presets": [
          [
            "@babel/env",
            {
              "useBuiltIns": "usage",
              "corejs": "3.15"
            }
          ],
          "@babel/preset-typescript"
        ],
        "ignore": ["node_modules"]
      }),
      ...plugins,
    ],
  }, override)
}

const config = createConfig(INPUT_FILE, output)

export default config
