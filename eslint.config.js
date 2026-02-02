import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  { 
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { 
      globals: { ...globals.browser, ...globals.node },
    },
  },
  { 
    files: ['**/*.{js,mjs,cjs}'], 
    plugins: { 
      js,
      '@stylistic': stylistic,
    }, 
    extends: ['js/recommended'],
    rules: {
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
    },
  },
])
