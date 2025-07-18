import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import stylistic from "@stylistic/eslint-plugin"

export default tseslint.config({
    ignores: [".vitepress/cache/*"],
    extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
        stylistic.configs.customize({
            semi: false,
            indent: 4,
            quotes: "double",
        }),
    ],
})
