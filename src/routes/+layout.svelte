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

	getThemeStore().setTheme(data.theme);
</script>

<svelte:head>
	<LangMeta />
</svelte:head>

<Header />

<main class="flex flex-col items-center px-6 py-8">
	<div class="max-w-screen-2xl">
		<slot />
	</div>
</main>
