import type { TTheme } from '$stores';
import type { RequestEvent } from '@sveltejs/kit';
import { CookiesStorage } from './cookies-storage';

export function getPreferredTheme({ cookies }: RequestEvent): TTheme {
	const cookiesStorage = new CookiesStorage(cookies);

	const storedTheme = cookiesStorage.getTheme();

	if (storedTheme) {
		return storedTheme as TTheme;
	}

	return 'system';
}
