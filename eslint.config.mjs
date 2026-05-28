import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      ".npm-cache/**",
      "build/**",
      "coverage/**",
      "node_modules/**",
      "out/**",
      "qa/**",
      "site-screenshots/**"
    ]
  },
  ...nextVitals,
  ...nextTs
];

export default eslintConfig;
