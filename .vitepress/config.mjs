import { defineConfig } from "vitepress"

// Sources sit at the repository root, not in docs/, so the build writes
// .vitepress/dist — which is the output directory the DataDack catalogue
// declares for this framework.
export default defineConfig({
  title: "VitePress on DataDack",
  description: "Minimal VitePress site for a DataDack Cloud deploy test",
  themeConfig: { nav: [{ text: "Home", link: "/" }] },
})
