// See https://kit.svelte.dev/docs/types#app

import type { Locales } from '$i18n';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface Locals {
			locale: Locales;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
