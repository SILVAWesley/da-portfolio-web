/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyUi: {
		themes: ['black', 'corporate']
	},
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')]
};
