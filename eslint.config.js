import js from "@eslint/js" // 校验js规范
import globals from "globals"
import tseslint from "typescript-eslint" // 校验ts规范
import pluginVue from "eslint-plugin-vue"
import { defineConfig } from "eslint/config"
import prettierRecommended from "eslint-plugin-prettier/recommended"
import { createRequire } from "module"

const require = createRequire(import.meta.url)
const autoImportConfig = require("./.eslintrc-auto-import.json")

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    plugins: { js },
    extends: ["js/recommended"]
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...autoImportConfig.globals  // 自动导入全局变量
      }
    }
  },
  tseslint.configs.recommended,
  pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"], // 校验vue中的ts代码
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }
    }
  },
  {
    // 自定义规则,根据需要增加  eslint 主要是校验代码规范  prettier  格式化代码的
    rules: {
      "no-console": "warn",
      "vue/multi-word-component-names": "off"
    }
  },
  prettierRecommended // 覆盖掉eslint的规范
])
