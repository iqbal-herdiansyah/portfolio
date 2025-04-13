import withNuxt from './.nuxt/eslint.config.mjs';

import prettier from 'eslint-plugin-prettier';
import prettierRecomended from 'eslint-plugin-prettier/recommended';

export default withNuxt({
  plugins: {
    prettier
  },
  rules: {
    ...prettierRecomended.rules,

    'no-console': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'off',

    'vue/multi-word-component-names': 'off',
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ]
  }
});
