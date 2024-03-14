import { LL } from '$i18n';
import { getSingletonContext } from '$utils';
import { derived } from 'svelte/store';

const NAVIGATION_STORE_KEY = 'navigation_store';

function createNavigationStore() {
	const { subscribe } = derived(LL, ($LL) => [
		{ id: 0, urls: ['/', '', undefined, null], name: $LL.pages.arts.title() },
		{ id: 1, urls: ['/about'], name: $LL.pages.about.title() }
	]);

	return {
		subscribe
	};
}

export function getNavigationStore() {
	return getSingletonContext(NAVIGATION_STORE_KEY, createNavigationStore);
}
