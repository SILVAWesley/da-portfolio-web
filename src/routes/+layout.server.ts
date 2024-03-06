import type { LayoutServerLoad } from './$types';

export const prerender = true;
export const ssr = true;

export const load: LayoutServerLoad = ({ locals }) => {
	return { locale: locals.locale, theme: locals.theme };
};
