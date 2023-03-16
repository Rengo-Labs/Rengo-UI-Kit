import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import { uglify } from 'rollup-plugin-uglify'

const packageJson = require("./package.json");
const extensions = ['.js', '.ts', '.tsx']

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      globals: {
        react: 'React',
        'styled-components': 'styled',
        'prop-types': 'PropTypes',
        'prop-types/checkPropTypes': 'checkPropTypes'
      },
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
      globals: {
        react: 'React',
        'styled-components': 'styled',
        'prop-types': 'PropTypes',
        'prop-types/checkPropTypes': 'checkPropTypes'
      },
    }
  ],
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    resolve({extensions}),
    commonjs(
        {
          include: ['node_modules/**'],
          namedExports: {
            'react-dom': ['createPortal']
          }
        }
    ),
    typescript({ useTsconfigDeclarationDir: true }),
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
    terser()
  ]
};
