import { base } from '$app/paths';
import { isLocale, type Locales } from '$i18n';
import { getPreferredLocale } from '$utils';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const [, urlLocale, ...rest] = event.url.pathname.split('/');

	if (!urlLocale || !isLocale(urlLocale)) {
		const newLocale = getPreferredLocale(event);
		throw redirect(307, `${base}/${newLocale}/${[urlLocale, rest].join('/')}`);
	}

	event.locals.locale = urlLocale satisfies Locales;

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', urlLocale)
	});
};
