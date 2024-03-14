<script lang="ts">
	import { page } from '$app/stores';
	import { Logo } from '$assets';
	import { LL } from '$i18n';
	import { getNavigationStore } from '$stores';
	import Drawer from './Drawer.svelte';
	import LanguageMenu from './LanguageMenu.svelte';
	import NavLink from './NavLink.svelte';
	import ThemeMenu from './ThemeMenu.svelte';

	const currentUrl = `/${$page.url.pathname.split('/')[2] ?? ''}`;
	const navigationStore = getNavigationStore();
</script>

<header
	class="sticky top-0 z-50 flex h-20 min-h-20 w-full justify-center border-b-[1px] border-base-300 bg-base-100 bg-opacity-80 px-6 backdrop-blur-sm"
>
	<div class="flex h-full w-full max-w-screen-2xl items-center gap-4 sm:gap-10">
		<div class="flex flex-row items-center gap-2 sm:flex-none">
			<Logo aria-label="Logo" class="stroke h-10 w-10 fill-transparent stroke-base-content" />

			<div class="flex flex-col justify-center">
				<h2 class="font-sans text-lg font-semibold leading-tight tracking-wider sm:text-xl">
					{$LL.header.name()}
				</h2>
				<h3 class="sm:text-md text-sm italic leading-none tracking-wider">
					{$LL.header.profession()}
				</h3>
			</div>
		</div>

		<nav class="hidden flex-1 sm:flex" aria-label={$LL.header.navigation.ariaLabel()}>
			<ul class="flex items-center gap-6">
				{#each $navigationStore as { id, name, urls } (id)}
					<NavLink active={urls.includes(currentUrl)} href={urls[0] ?? '/'}>{name}</NavLink>
				{/each}
			</ul>
		</nav>

		<div class="hidden gap-3 sm:flex">
			<LanguageMenu />
			<ThemeMenu />
		</div>

		<div class="flex flex-1 justify-end sm:hidden">
			<div>
				<Drawer />
			</div>
		</div>
	</div>
</header>
