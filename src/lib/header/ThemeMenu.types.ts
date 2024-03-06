import type { TTheme } from '$stores';
import type { ComponentType, SvelteComponent } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';

export interface IThemeInfo {
	id: number;
	name: string;
	type: TTheme;
	icon: ComponentType<SvelteComponent<SVGAttributes<SVGSVGElement>, any, any>>;
}
