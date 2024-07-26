import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTest.ts",
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        "src/main.tsx",
        "src/router.tsx",
        "**/*.cjs",
      ],
    },
  },
});
