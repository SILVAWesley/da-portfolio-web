import type { Cookies } from '@sveltejs/kit';

export class CookiesStorage {
	private cookies: Cookies;

	constructor(cookies: Cookies) {
		this.cookies = cookies;
	}

	getLocale() {
		return this.cookies.get('locale');
	}
}
