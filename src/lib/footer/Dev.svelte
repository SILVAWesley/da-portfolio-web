<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from '../../routes/[lang=lang]/$types';

	let { dev } = ($page.data as PageData).info.attributes;
</script>

<div class="mt-16 h-5">
	<h4 class="text-center text-xs">
		Developed by <a class="link link-accent" href={dev}>SILVAWesley</a>
	</h4>
</div>
