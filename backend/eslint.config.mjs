import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    ignores: ["./build/**.{js,mjs,cjs,ts}"],
  },
  {
    languageOptions: { globals: globals.node },
    rules: {
      "no-console": ["error", { allow: ["info", "error"] }],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
);
