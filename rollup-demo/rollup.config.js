import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import { dts } from "rollup-plugin-dts";
import clear from "rollup-plugin-clear";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
// import { terser } from "rollup-plugin-terser";

const basePlugins = [
  babel({
    exclude: "node_modules/**",
  }),
  commonjs(),
  resolve(),
  // 以下也可以生成声明文件.d.ts，但这里我们使用插件 rollup-plugin-dts 来生成
  typescript({
    tsconfig: "./tsconfig.json", // 指向你的tsconfig.json文件
    outputToFilesystem: true, // 输出.d.ts文件到文件系统
    declaration: false, // true: 生成.d.ts文件; false: 不生成
    declarationDir: "./dist", // 指定.d.ts文件的输出目录
  }),
  clear({
    // required, point out which directories should be clear.
    targets: ["dist"],
    // optional, whether clear the directores when rollup recompile on --watch mode.
    watch: true, // default: false
  }),
  // terser(), // 为了方便查看输出结果，先注释
];

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "./dist/bundle-umd.js",
        format: "umd",
        name: "bundle",
      },
      {
        file: "./dist/bundle-es.js",
        format: "es",
      },
      {
        file: "./dist/bundle-cjs.js",
        format: "cjs",
      },
    ],
    plugins: basePlugins,
  },
  {
    input: "src/index.ts",
    output: {
      file: "./dist/index.d.ts",
      format: "es",
    },
    plugins: [
      dts(),
    ], // 生成声明文件inde.d.ts,注意，这里依赖tsconfig.json的配置
  },
];
