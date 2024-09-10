/** @format */

import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue2";
import path from "node:path";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { createSvgPlugin } from "vite-plugin-vue2-svg";
import WindiCSS from "vite-plugin-windicss";

const config = defineConfig(({ mode }) => {
  const { VITE_APP_TITLE, VITE_BUILD_PATH } = loadEnv(mode, process.cwd());
  return {
    base: "/",
    resolve: {
      alias: {
        "@": `${path.resolve(__dirname, "src")}`,

        "~": path.resolve(__dirname, "./node_modules"),
      },
    },

    build: {
      minify: true,
      emptyOutDir: true,

      outDir: VITE_BUILD_PATH,
      // target: 'es2015',
      sourcemap: false,
      chunkSizeWarningLimit: 2000,
      reportCompressedSize: false,
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },

    plugins: [
      vue(),
      WindiCSS(),
      Components({
        resolvers: [
          IconsResolver({
            componentPrefix: "x-icon",
          }),
        ],
        dts: "src/components.d.ts",
      }),
      Icons(),
      AutoImport({
        imports: ["@vueuse/core"],
        dts: "src/auto-imports.d.ts",
      }),

      legacy({
        // targets: ["android 4", "ios 8", "chrome 52", "ie 11"],
        targets: ["chrome 69"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        renderLegacyChunks: true,
        polyfills: [
          "es.symbol",
          "es.array.filter",
          "es.promise",
          "es.promise.finally",
          "es/map",
          "es/set",
          "es.array.for-each",
          "es.object.define-properties",
          "es.object.define-property",
          "es.object.get-own-property-descriptor",
          "es.object.get-own-property-descriptors",
          "es.object.keys",
          "es.object.to-string",
          "web.dom-collections.for-each",
          "esnext.global-this",
          "esnext.string.match-all",
        ],
      }),
      createSvgPlugin(),
      createHtmlPlugin({
        inject: {
          data: {
            title: VITE_APP_TITLE,
          },
        },
      }),
    ],

    server: {
      port: 42000,
      host: "0.0.0.0",
      proxy: {

      },
    },
  };
});

export default config;
