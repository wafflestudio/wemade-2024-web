import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import'; // import 정렬 플러그인 추가
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettier, // Prettier의 ESLint 규칙 비활성화
    ],
    files: ['**/*.{js, jsx, ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin, // Prettier 플러그인 추가
      import: importPlugin, // import 플러그인 추가
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': ['warn'],
      'prettier/prettier': 'error', // Prettier 규칙을 ESLint 에러로 표시
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-duplicates': 'error',
      'import/no-named-as-default': 'off',
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'import',
          next: ['class', 'function', 'const', 'let', 'var', 'export'],
        },
      ],
    },
  }
);
