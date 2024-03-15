import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$assets: 'src/assets',
			$i18n: 'src/i18n',
			$params: 'src/params',
			$routes: 'src/routes',
			$services: 'src/services',
			$stores: 'src/stores',
			$utils: 'src/utils',
			$types: 'src/types'
		}
	}
};

export default config;
