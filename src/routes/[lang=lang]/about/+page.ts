import { locales } from '$i18n';
import type { EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return locales.map((locale) => ({
		lang: locale
	}));
};
