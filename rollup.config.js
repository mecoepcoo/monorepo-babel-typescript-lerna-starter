import path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import pkg from './package.json'

const resolve = function(...args) {
  return path.resolve(__dirname, ...args)
}

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
]

// TODO: name取package中的值
const name = pkg.name


