import { setLocale } from '$i18n';
import { loadLocaleAsync } from '$i18n/i18n-util.async';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data }) => {
	await loadLocaleAsync(data.locale);
	setLocale(data.locale);

	return data;
};
