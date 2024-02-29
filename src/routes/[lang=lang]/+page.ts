import type { EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return [{ lang: 'pt-BR' }, { lang: 'en' }];
};
