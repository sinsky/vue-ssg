import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import type { ViteSSGOptions } from "vite-ssg";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), VueRouter()],
  ssgOptions: {
    script: "async",
  } as ViteSSGOptions,
});
