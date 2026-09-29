import { base, react, testing } from '@inzumer/eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [{ ignores: ['dist/**', 'coverage/**'] }, ...base, ...react, ...testing];
