<script lang="ts">
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import '../app.css';

	injectSpeedInsights();
</script>

<slot />
