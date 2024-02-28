<script lang="ts">
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { inject } from '@vercel/analytics';
	import { dev } from '$app/environment';
	import '../app.css';

	injectSpeedInsights();
	inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />
