import { CookiesStorage, getSingletonContext } from '$utils';
import type { ComponentType, SvelteComponent } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';
import { writable } from 'svelte/store';

const THEME_STORE_KEY = 'theme_store';

export interface IThemeInfo {
	id: number;
	name: string;
	type: TTheme;
	icon: ComponentType<SvelteComponent<SVGAttributes<SVGSVGElement>, any, any>>;
}

export type TTheme = 'system' | 'dark' | 'light';

export interface IThemeStore {
	theme?: TTheme;
}

export function createThemeStore(value?: IThemeStore) {
	const { subscribe, update } = writable<IThemeStore>(value);

	return {
		subscribe,
		setTheme(newTheme: TTheme, updateCookie = false) {
			update((currentValue) => ({ ...currentValue, theme: newTheme }));

			if (updateCookie) {
				CookiesStorage.clientSetTheme(newTheme);
			}
		}
	};
}

export function getThemeStore() {
	return getSingletonContext(THEME_STORE_KEY, createThemeStore, { theme: undefined });
}
