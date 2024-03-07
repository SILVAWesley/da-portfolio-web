<script lang="ts">
	import { dev } from '$app/environment';
	import { Header, LangMeta } from '$lib';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import '../app.css';

	injectSpeedInsights();
	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<LangMeta />
	<meta name="theme-color" content="#fff" />
</svelte:head>

<Header />

<main class="flex flex-col items-center px-6 py-8">
	<div class="max-w-screen-2xl">
		<slot />
	</div>
</main>
