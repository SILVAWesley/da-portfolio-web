import { detectLocale, isLocale, type Locales } from '$i18n';
import type { RequestEvent } from '@sveltejs/kit';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';
import { CookiesStorage } from './cookies-storage';

/**
 * Get the preferred locale if no locale was provided in the URL
 * The preferred locale is defined by one of these in order:
 *  1) If the user has an active 'locale' cookie stored
 *     in the browser, that is the preferred locale
 *  2) Read the Accept-Language header attribute and get the
 *     priority language
 *
 * @param event
 * @returns the preferred locale
 */
export function getPreferredLocale({ request, cookies }: RequestEvent): Locales {
	const storage = new CookiesStorage(cookies);
	const cookie = storage.getLocale();

	if (cookie && isLocale(cookie)) {
		return cookie;
	}

	/* Read Accept-Language */
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request);
	return detectLocale(acceptLanguageDetector);
}
