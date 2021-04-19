module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
      },
    },
  },
  plugins: [
    'react',
    'simple-import-sort',
  ],
  rules: {
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'no-unused-vars': 'error',
    'react/sort-comp': [1],
    'max-len': [
      'error',
      140,
      2,
      {
        ignoreComments: true, ignoreUrls: true,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'react/prop-types': [0],
    'react/jsx-props-no-spreading': [0],
    'react/react-in-jsx-scope': 'off',
    indent: ['error', 2],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    quotes: ['error', 'single'],
    'jsx-a11y/anchor-is-valid':
      ['error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'],
        },
      ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-duplicates': 'error',
  },
};
