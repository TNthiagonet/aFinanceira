import globals from 'globals';
import { defineConfig } from 'eslint';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import { ESLint } from 'eslint';

export default defineConfig({
  overrides: [
    {
      files: ['**/*.{js,mjs,cjs,ts,tsx}'],
      languageOptions: { globals: globals.browser },
      plugins: ['@typescript-eslint', 'react'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
      ],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        // Adicione suas regras personalizadas aqui
      }
    }
  ]
});
