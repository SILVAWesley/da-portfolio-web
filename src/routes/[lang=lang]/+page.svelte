<script lang="ts">
	import { page } from '$app/stores';
	import { ArtCard, ArtDialog, PageMeta } from '$lib';
</script>

<svelte:head>
	<PageMeta page="arts" />
</svelte:head>

<div class="grid w-full grid-cols-1 gap-7 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
	<ArtCard
		images={[
			{ alt: 'hello', src: '/art1.jpg', id: 0 },
			{ alt: 'hello', src: '/art2.jpg', id: 1 }
		]}
	/>
	<ArtCard images={[{ alt: 'hello', src: '/art1.jpg', id: 0 }]} />
	<ArtCard images={[{ alt: 'hello', src: '/art1.jpg', id: 0 }]} />
	<ArtCard images={[{ alt: 'hello', src: '/art1.jpg', id: 0 }]} />
	<ArtCard images={[{ alt: 'hello', src: '/art1.jpg', id: 0 }]} />
</div>
