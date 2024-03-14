import { InfoService } from '../services';
import type { LayoutServerLoad } from './$types';

export const prerender = true;
export const ssr = true;

export const load: LayoutServerLoad = async ({ locals }) => {
	const info = await InfoService.get(locals.locale);
	return { locale: locals.locale, theme: locals.theme, info };
};
