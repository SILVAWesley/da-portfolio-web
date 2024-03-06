import themes from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			'light',
			{
				dark: {
					...themes['black'],
					primary: '#a991f7',
					secondary: '#f6d860',
					accent: '#37cdbe',

					'--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
					'--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
					'--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
					'--animation-btn': '0.25s', // duration of animation when you click on button
					'--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
					'--btn-focus-scale': '0.95', // scale transform of button when you focus on it
					'--border-btn': '1px', // border width of buttons
					'--tab-border': '1px', // border width of tabs
					'--tab-radius': '0.5rem' // border radius of tabs
				}
			}
		]
	},
	theme: {
		extend: {
			fontFamily: {
				handwritten: ['Dancing Script Variable', 'cursive'],
				sans: ['Montserrat Variable', 'sans-serif'],
				serif: ['Roboto Slab Variable', 'serif']
			}
		}
	},
	plugins: [require('daisyui')]
};
