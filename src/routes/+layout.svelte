<script lang="ts">
	import { dev } from '$app/environment';
	import { Header, LangMeta } from '$lib';
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

<Header />

<main class="flex flex-col items-center px-0 py-4 sm:px-6 sm:py-8">
	<div class="max-w-screen-2xl">
		<slot />
	</div>
</main>
