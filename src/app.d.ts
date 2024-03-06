// See https://kit.svelte.dev/docs/types#app

import type { Locales } from '$i18n';
import type { TTheme } from '$stores';
import '@poppanator/sveltekit-svg/dist/svg';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface Locals {
			locale: Locales;
			theme: TTheme;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
