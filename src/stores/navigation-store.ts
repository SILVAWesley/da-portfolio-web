import { derived } from 'svelte/store';
import { LL } from '$i18n';
import { getSingletonContext } from '$utils';

const NAVIGATION_STORE_KEY = 'navigation_store';

function createNavigationStore() {
	const { subscribe } = derived(LL, ($LL) => [
		{ id: 0, urls: ['/', '', undefined, null], name: $LL.sitemap.arts.name() },
		{ id: 1, urls: ['/about'], name: $LL.sitemap.about.name() }
	]);

	return {
		subscribe
	};
}

export function getNavigationStore() {
	return getSingletonContext(NAVIGATION_STORE_KEY, createNavigationStore);
}
