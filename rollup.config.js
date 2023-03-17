import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import { uglify } from 'rollup-plugin-uglify'
import copy from 'rollup-plugin-copy'

const packageJson = require("./package.json");
const extensions = ['.js', '.ts', '.tsx']
const overrides = {
  exclude: [
    "**/stories/**",
    "**/stories",
    "**/*.stories.js",
    "**/__tests__/**",
    "**/__mocks__/**",
    "**/fonts",
    "**/fonts/**",
    "**/fonts/**/*",
  ],
};
export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    },
    {
      name: "RengoUIKit",
      file: 'lib/index.umd.js',
      format: 'umd',
      sourcemap: true,
    }
  ],
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    resolve({extensions}),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true, tsconfigOverride: overrides, }),
    postcss({
        extensions: ['.css']
    }),
    babel({
      extensions,
      exclude: 'node_modules/**',
      babelrc: false,
      runtimeHelpers: true
    }),
    uglify(),
    terser(),
    copy({
      targets: [
        { src: "fonts", dest: "lib/fonts" },
      ],
    }),
  ]
};
