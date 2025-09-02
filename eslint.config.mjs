import prettier from 'eslint-config-prettier';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.ts';
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default ts.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		rules: {
			// typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
			// see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			'no-undef': 'off'
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		}
	},
	{
		plugins: {
			'better-tailwindcss': eslintPluginBetterTailwindcss
		},
		rules: {
			// enable all recommended rules to report a warning
			...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,

			'better-tailwindcss/multiline': [
				'warn',
				{
					printWidth: 120,
					preferSingleLine: true,
					group: 'never',
					callees: ['clsx', 'cva', 'ctl', 'twMerge', 'cn']
				}
			]
		},
		settings: {
			'better-tailwindcss': {
				entryPoint: 'src/app.css'
			}
		}
	}
);
