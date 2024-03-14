<script lang="ts">
	import { page } from '$app/stores';
	import { LL } from '$i18n';
	import NavLink from '$lib/header/NavLink.svelte';
	import { getNavigationStore } from '$stores';
	import FooterSection from './FooterSection.svelte';

	let clazz: string = '';
	export { clazz as class };

	let navigationStore = getNavigationStore();
	const currentUrl = `/${$page.url.pathname.split('/')[2] ?? ''}`;
</script>

<FooterSection title={$LL.footer.pages.title()} class={clazz}>
	<nav aria-label={$LL.footer.pages.navLabel()}>
		<ul class="flex w-full flex-col gap-1">
			{#each $navigationStore as { id, name, urls } (id)}
				<NavLink active={urls.includes(currentUrl)} href={urls[0] ?? '/'}>{name}</NavLink>
			{/each}
		</ul>
	</nav>
</FooterSection>
