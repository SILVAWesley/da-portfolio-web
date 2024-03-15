<script lang="ts">
	import { LL } from '$i18n';
	import { ArtCard, PageMeta } from '$lib';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	$: arts = data?.arts;
</script>

<svelte:head>
	<PageMeta pageName="arts" />
</svelte:head>

<div class="flex h-full w-full flex-col gap-4">
	<h1 class="border-neutral text-center text-2xl font-light">
		{$LL.pages.arts.title()}
	</h1>

	<div class="grid w-full grid-cols-1 gap-7 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#each arts as art (art.id)}
			<ArtCard
				images={art.attributes.images.data.map((img) => ({
					alt: 'hello',
					src: img.attributes.formats.small.url,
					id: img.id
				}))}
			/>
		{/each}
	</div>
</div>
