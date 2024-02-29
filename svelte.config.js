import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$i18n: 'src/i18n',
			$routes: 'src/routes',
			$params: 'src/params',
			$utils: 'src/utils'
		}
	}
};

export default config;
