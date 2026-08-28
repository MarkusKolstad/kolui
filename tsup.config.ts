import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  tsconfig: "./tsconfig.app.json",
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "@base-ui/react"],
  esbuildOptions(options) {
    options.alias = {
      "@": "./src",
    };
  },
});
