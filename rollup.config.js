//references: https://github.com/alibaba/ali-react-table
import pkg from "./package.json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

const external = Object.keys(pkg.dependencies || {}).concat(
  Object.keys(pkg.peerDependencies || {})
);

const config = (arg) => ({
  plugins: [
    typescript({
      tsconfig: "tsconfig.json",
    }),
    resolve({
      extensions: [".mjs", ".js", ".jsx", ".json", ".node"],
    }),
  ],
  external,
  treeshake: {
    moduleSideEffects: false,
  },
  ...arg,
});

const input = ["src/index.ts"];

export default [
  config({
    input: input,
    output: {
      dir: "dist",
      format: "esm",
      entryFileNames: "[name].esm.js",
      chunkFileNames: "chunks/tree-utils-[name]-[hash].esm.js",
    },
  }),
  config({
    input: input,
    output: {
      dir: "dist",
      format: "cjs",
      entryFileNames: "[name].js",
      chunkFileNames: "chunks/tree-utils-[name]-[hash].js",
    },
  }),
  config({
    input: input,
    output: {
      dir: "dist",
      format: "iife",
      name: "Clipboard",
      globals: { react: "React" },
      entryFileNames: "[name].iife.js",
      chunkFileNames: "chunks/tree-utils-[name]-[hash].iife.js",
    },
  }),
];
