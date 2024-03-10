<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import {
		DesktopIcon,
		GlobeIcon,
		LinkIcon,
		MenuAltRightIcon,
		MoonIcon,
		PaletteIcon,
		SunIcon,
		XIcon
	} from '$assets';
	import { LL, isLocale, locale } from '$i18n';
	import { getNavigationStore, getThemeStore, type IThemeInfo } from '$stores';
	import { focusTrap, replaceLocaleInUrl, siteLocales } from '$utils';
	import { matchBreakpoint } from '$utils/match-breakpoint';
	import { onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	let open = false;

	let drawerTriggerNode: HTMLElement;

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape' && open) {
			open = false;
			drawerTriggerNode.focus();
		}
	}

	onMount(() => {
		function handleResize() {
			if (matchBreakpoint('sm') && open) {
				open = false;
			}
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			document.body.removeEventListener('keydown', handleKeyDown);
		};
	});

	if (browser) {
		window.addEventListener('resize', () => {
			if (matchBreakpoint('sm') && open) {
				open = false;
			}
		});
	}

	$: {
		if (browser) {
			if (open) {
				document.body.classList.add('overflow-hidden');
				document.body.addEventListener('keydown', handleKeyDown);
			} else {
				document.body.classList.remove('overflow-hidden');
				document.body.removeEventListener('keydown', handleKeyDown);
			}
		}
	}

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

	const themeStore = getThemeStore();
	const navigationStore = getNavigationStore();
	const currentUrl = `/${$page.url.pathname.split('/')[2] ?? ''}`;
</script>

<div class="drawer drawer-end">
	<input id="nav-drawer-mobile" type="checkbox" class="drawer-toggle hidden" bind:checked={open} />

	<div class="drawer-content">
		<button
			aria-label={$LL.header.drawer.open()}
			bind:this={drawerTriggerNode}
			class="btn btn-ghost fill-current"
			aria-haspopup="menu"
			aria-expanded={open}
			on:click={() => {
				open = true;
			}}
		>
			<MenuAltRightIcon class="h-9" />
		</button>
	</div>

	<div class="drawer-side">
		<label for="nav-drawer-mobile" aria-label="close sidebar" class="drawer-overlay" />

		<div
			class="flex min-h-full w-72 max-w-full flex-col rounded-3xl rounded-r-none bg-base-100"
			class:hidden={!open}
			use:focusTrap={open}
		>
			<div class="p-6">
				<button
					class="btn btn-circle btn-ghost fill-current"
					aria-label="Close menu"
					on:click={(e) => {
						open = false;
					}}><XIcon width="32px" height="32" /></button
				>
			</div>

			<ul class="menu" role="menubar" aria-orientation="vertical">
				<li>
					<details open>
						<summary class="fill-current" role="menuitem"
							><LinkIcon class="fill-current" />{$LL.header.navigation.name()}</summary
						>

						<nav aria-label={$LL.header.navigation.ariaLabel()}>
							<ul>
								{#each $navigationStore as { id, name, urls } (id)}
									<li>
										<a
											class={twMerge(`underline-offset-4`)}
											class:active={urls[0] === currentUrl}
											href={urls[0] ?? '/'}
										>
											{name}
										</a>
									</li>
								{/each}
							</ul>
						</nav>
					</details>
				</li>

				<li>
					<details open>
						<summary class="fill-current" role="menuitem"
							><GlobeIcon />{$LL.header.languageMenu.name()}</summary
						>

						<ul>
							{#each siteLocales as { id, code, name } (id)}
								<li>
									<a
										aria-checked={code === $locale}
										class:active={code === $locale}
										role="menuitemradio"
										href={`${replaceLocaleInUrl($page.url, isLocale(code) ? code : 'pt-BR', true)}`}
										>{name}</a
									>
								</li>
							{/each}
						</ul>
					</details>
				</li>

				<li>
					<details open>
						<summary class="fill-current"><PaletteIcon />{$LL.header.themeMenu.name()}</summary>

						<ul>
							{#each themeList as { icon, id, name, type } (id)}
								<li>
									<button
										aria-checked={type === $themeStore.theme}
										class="flex gap-4 fill-base-content"
										class:active={type === $themeStore.theme}
										role="menuitemradio"
										on:click={() => themeStore.setTheme(type, true)}
									>
										<svelte:component this={icon} class="fill-current" />
										{name}
									</button>
								</li>
							{/each}
						</ul>
					</details>
				</li>
			</ul>
		</div>
	</div>
</div>
