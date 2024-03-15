import { ArtService } from '$services';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ locals }) => {
	const arts = await ArtService.getAll(locals.locale, 1);
	return { arts };
};
