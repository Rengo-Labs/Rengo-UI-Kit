import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import babel from 'rollup-plugin-babel'
import {terser} from 'rollup-plugin-terser'
import {uglify} from 'rollup-plugin-uglify'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'

const packageJson = require("./package.json");
const extensions = ['.js', '.ts', '.tsx']
const externals = ['react', 'react-dom', 'styled-components']
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
const input = "src/index.ts";
const plugins = [
    peerDepsExternal({ packageJsonPath: 'package.json' }),
    svgr({exportType: 'named', jsxRuntime: 'automatic'}),
    url({
        include: ['**/*.ttf', '**/*.otf', '**/*.svg', '**/**/*.svg'],
        limit: Infinity,
    }),
    resolve({ browser: true, extensions}),
    commonjs(),
    typescript({useTsconfigDeclarationDir: true, tsconfigOverride: overrides,}),
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
];
export default [
    {
        input: input,
        output: {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
            globals: {
                'react': 'React',
                'react-dom': 'ReactDOM',
                'styled-components': 'styled',
            },
        },
        plugins: plugins,
        external: externals,
    },
    {
        input: input,
        output: {
            file: packageJson.module,
            format: "esm",
            sourcemap: true,
            globals: {
                'react': 'React',
                'react-dom': 'ReactDOM',
                'styled-components': 'styled',
            }
        },
        plugins: plugins,
        external: externals,
    },
    {
        input: input,
        output: {
            name: "RengoUIKit",
            file: 'lib/index.umd.js',
            format: 'umd',
            sourcemap: true,
            globals: {
                'react': 'React',
                'react-dom': 'ReactDOM',
                'styled-components': 'styled',
            },
        },
        plugins: plugins,
        external: externals,
    }
]
