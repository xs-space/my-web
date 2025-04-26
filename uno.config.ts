import { defineConfig } from "unocss"
import presetAttributify from "@unocss/preset-attributify"
import presetUno from "@unocss/preset-uno"
import transformDirective from "@unocss/transformer-directives"
import presetIcons from "@unocss/preset-icons"

export default defineConfig({
  presets: [presetAttributify(), presetUno(), presetIcons()],
  transformers: [transformDirective()], // apply
  shortcuts: [["icon", "inline-block w-1em h-1em align-middle text-current"]]
})
