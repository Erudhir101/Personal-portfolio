import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { createHighlighter } from 'shiki';

const langst = [
	'c',
	'css',
	'go',
	'html',
	'java',
	'javascript',
	'json',
	'jsx',
	'svelte',
	'tsx',
	'typescript'
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		mdsvex({
			layout: {
				_: './src/lib/components/__layout.svelte'
			},
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await createHighlighter({
						themes: ['catppuccin-mocha', 'catppuccin-latte'],
						langs: langst
					});
					await highlighter.loadLanguage(...langst);
					const html = escapeSvelte(
						highlighter.codeToHtml(code, { lang, theme: 'catppuccin-mocha' })
					);
					return `{@html \`${html}\` }`;
				}
			}
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},

	extensions: ['.svelte', '.svx', '.md']
};

export default config;
