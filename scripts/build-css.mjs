import { readFileSync, writeFileSync } from "fs";

// tsup compiles all component CSS imports into dist/index.css.
// Strip the sourceMappingURL comment — it references index.css.map which won't
// exist relative to the output files.
const componentCss = readFileSync("./dist/index.css", "utf8")
  .replace(/\/\*#\s*sourceMappingURL=.*?\*\//g, "")
  .trimEnd();

const tokensCss = readFileSync("./src/tokens.css", "utf8").trim();
const baseCss = readFileSync("./src/base.css", "utf8").trim();

// dist/tokens.css — CSS variables + component styles, no global resets.
// Consumers who want zero global pollution import this.
writeFileSync("./dist/tokens.css", `${tokensCss}\n\n${componentCss}\n`);

// dist/styles.css — tokens + base typography/resets + component styles.
// Full package for projects that want the opinionated defaults.
writeFileSync(
  "./dist/styles.css",
  `${tokensCss}\n\n${baseCss}\n\n${componentCss}\n`,
);

console.log("dist/tokens.css and dist/styles.css written");
