import type { Locales } from '$i18n';
import type { TTheme } from '$stores';
import type { Cookies } from '@sveltejs/kit';

export class CookiesStorage {
	private cookies: Cookies;

	constructor(cookies: Cookies) {
		this.cookies = cookies;
	}

	getLocale() {
		return this.cookies.get('locale');
	}

	getTheme() {
		return this.cookies.get('theme');
	}

	static clientSetLocale(newLocale: Locales) {
		const maxAge = 60 * 60 * 24 * 30; /* 1 month */
		const path = '/';
		const strict = 'strict';
		document.cookie = `locale=${newLocale}; max-age=${maxAge}; path=${path}; strict=${strict}`;
		document.documentElement.setAttribute('lang', newLocale);
	}

	static clientSetTheme(newTheme: TTheme) {
		const maxAge = 60 * 60 * 24 * 30; /* 1 month */
		const path = '/';
		const strict = 'strict';
		document.cookie = `theme=${newTheme}; max-age=${maxAge}; path=${path}; strict=${strict}`;
		document.documentElement.setAttribute('data-theme', newTheme == 'system' ? '' : newTheme);
	}
}
