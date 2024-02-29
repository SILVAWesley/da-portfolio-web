<script lang="ts">
	import { dev } from '$app/environment';
	import { setLocale, type Locales } from '$i18n';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import '../app.css';
	import type { LayoutData } from './$types';
	import { loadLocale } from '$i18n';
	import { onMount } from 'svelte';
	import { loadLocaleAsync } from '$i18n/i18n-util.async';

	injectSpeedInsights();
	inject({ mode: dev ? 'development' : 'production' });

	export let data: LayoutData;
	loadLocale(data.locale);
	setLocale(data.locale);
</script>

<slot />
