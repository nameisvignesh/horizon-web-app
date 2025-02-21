import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Get the current filename and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create an instance of FlatCompat with the base directory
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend the Next.js ESLint configuration
const eslintConfig = [...compat.extends("next/core-web-vitals")];

// Export the ESLint configuration
export default eslintConfig;
