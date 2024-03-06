import { base } from '$app/paths';
import { isLocale, type Locales } from '$i18n';
import { getPreferredLocale } from '$utils';
import { getPreferredTheme } from '$utils/get-preferred-theme';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const skip = ['_vercel'];

const handleLanguage: Handle = async ({ event, resolve }) => {
	const [, urlLocale, ...rest] = event.url.pathname.split('/');

	if (skip.includes(urlLocale)) {
		return resolve(event);
	}

	if (!urlLocale || !isLocale(urlLocale)) {
		const newLocale = getPreferredLocale(event);

		const otherPart = `${urlLocale}${urlLocale ? '/' : ''}${rest}`;

		throw redirect(307, `${base}/${newLocale}/${otherPart}`);
	}

	event.locals.locale = urlLocale satisfies Locales;

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', urlLocale)
	});
};

export const handleTheme: Handle = async ({ event, resolve }) => {
	const theme = getPreferredTheme(event);
	event.locals.theme = theme;

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%theme%', theme === 'system' ? '' : theme)
	});
};

export const handle = sequence(handleLanguage, handleTheme);
