module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // Puedes ajustar esto a tu gusto
    'react/react-in-jsx-scope': 'off', // Vite no necesita importar React
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};