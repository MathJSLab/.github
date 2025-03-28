/**
 * eslint.config.cjs: ESLint configuration.
 */

const path = require('node:path');
const globals = require('globals');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');
const eslintConfigPrettier = require('eslint-config-prettier');
const importPlugin = require('eslint-plugin-import');

console.log(`Running project lint (configuration: ${path.basename(__filename)}) ...`);

module.exports = [
    {
        files: ['src/**/*.ts', 'types/**/*.d.ts'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: 'tsconfig.json',
                tsconfigRootDir: __dirname,
                sourceType: 'module',
                globals: {
                    ...globals.es2015,
                },
            },
        },
        plugins: {
            import: importPlugin,
            '@typescript-eslint': tsPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            ...tsPlugin.configs['eslint-recommended'].rules,
            ...tsPlugin.configs['recommended'].rules,
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-this-alias': 'off',
            '@typescript-eslint/interface-name-prefix': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/no-unsafe-function-type': 'off',
            'no-console': 'warn',
            ...prettierPlugin.configs.recommended.rules,
            ...eslintConfigPrettier.rules,
        },
    },
    {
        files: ['script/**/*.ts'],
        ignores: ['script/build/**/*', 'script/helper/EleventyUtil.ts'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: 'tsconfig.json',
                tsconfigRootDir: path.join(__dirname, 'script'),
                sourceType: 'module',
                globals: globals.es2015,
            },
        },
        plugins: {
            import: importPlugin,
            '@typescript-eslint': tsPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            ...tsPlugin.configs['eslint-recommended'].rules,
            ...tsPlugin.configs['recommended'].rules,
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-this-alias': 'off',
            '@typescript-eslint/interface-name-prefix': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/no-unsafe-function-type': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            ...prettierPlugin.configs.recommended.rules,
            ...eslintConfigPrettier.rules,
        },
    },
    {
        files: ['script/**/*.js', 'script/**/*.jsx', 'script/**/*.cjs', 'script/**/*.mjs'],
        ignores: ['script/build/**/*'],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                globals: globals.es2015,
            },
        },
        plugins: {
            import: importPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            ...prettierPlugin.configs.recommended.rules,
            ...eslintConfigPrettier.rules,
        },
    },
];
