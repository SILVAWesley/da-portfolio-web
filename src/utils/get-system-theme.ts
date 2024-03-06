import { browser } from '$app/environment';

export function getSystemTheme() {
	if (browser) {
		const media = window.matchMedia('(prefers-color-scheme: dark)');
		return media.matches ? 'dark' : 'light';
	}

	return 'dark';
}
