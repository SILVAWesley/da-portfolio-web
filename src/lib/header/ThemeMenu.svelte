<script lang="ts">
	import { DesktopIcon, MoonIcon, PaletteIcon, SunIcon } from '$assets';
	import { LL } from '$i18n';
	import { DropdownMenu } from '$lib/dropdown-menu';
	import { getThemeStore } from '$stores';
	import type { IThemeInfo } from './ThemeMenu.types';

	const themeStore = getThemeStore();

	$: themeList = [
		{
			id: 0,
			icon: DesktopIcon,
			name: $LL.header.themeMenu.themes.system(),
			type: 'system'
		},
		{
			id: 1,
			icon: MoonIcon,
			name: $LL.header.themeMenu.themes.dark(),
			type: 'black'
		},
		{
			id: 2,
			icon: SunIcon,
			name: $LL.header.themeMenu.themes.light(),
			type: 'light'
		}
	] satisfies IThemeInfo[];
</script>

<DropdownMenu>
	<PaletteIcon
		aria-label={$LL.header.themeMenu.ariaLabel()}
		slot="summary"
		class="fill-base-content"
	/>

	<svelte:fragment slot="list">
		{#each themeList as { icon, id, name, type } (id)}
			<li>
				<button
					aria-checked={type === $themeStore.theme}
					class="link-hover link flex gap-4 fill-base-content"
					class:active={type === $themeStore.theme}
					role="menuitemradio"
					on:click={() => themeStore.setTheme(type, true)}
				>
					<svelte:component this={icon} class="fill-current" />
					{name}
				</button>
			</li>
		{/each}
	</svelte:fragment>
</DropdownMenu>
