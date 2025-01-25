import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				inter: 'Inter',
				jetbrains: 'JetBrains Mono'
			},
			colors: {
				cat: {
					base: '#1e1e2e',
					blue: '#89b4fa',
					crust: '#11111b',
					green: '#a6e3a1',
					mantle: '#181825',
					mauve: '#cba6f7',
					peach: '#fab387',
					red: '#f38ba8',
					text: '#cdd6f4'
				}
			}
		}
	},

	plugins: [typography]
} satisfies Config;
