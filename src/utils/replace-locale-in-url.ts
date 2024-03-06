import type { Locales } from '$i18n';

export function replaceLocaleInUrl(url: URL, locale: Locales, relativePath = false) {
	const base = `${url.protocol}//${url.host}`;

	const [, , ...rest] = url.pathname.split('/');
	const newPathname = `/${locale}${rest?.length === 0 ? '' : '/'}${rest}`;

	return relativePath ? newPathname : `${base}${newPathname}`;
}
