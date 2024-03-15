<script lang="ts">
	import { dev } from '$app/environment';
	import { Header, LangMeta } from '$lib';
	import Footer from '$lib/footer/Footer.svelte';
	import { getThemeStore } from '$stores';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import '../app.css';
	import type { LayoutData } from './$types';

	injectSpeedInsights();
	inject({ mode: dev ? 'development' : 'production' });

	export let data: LayoutData;

	const themeStore = getThemeStore();
	themeStore.setTheme(data.theme);
</script>

<svelte:head>
	<LangMeta />
	<meta name="theme-color" content={$themeStore.theme === 'light' ? '#fff' : '#000'} />
</svelte:head>

<div class="flex h-full flex-col">
	<Header />

	<main class="flex flex-1 flex-col items-center px-0 py-4 sm:px-6 sm:py-8">
		<div class="w-full max-w-screen-2xl">
			<slot />
		</div>
	</main>

	<Footer />
</div>
