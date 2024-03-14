<script lang="ts">
	import { LL } from '$i18n';
	import { ArtCard, PageMeta } from '$lib';
</script>

<svelte:head>
	<PageMeta pageName="arts" />
</svelte:head>

<div class="flex flex-col gap-4">
	<h1 class="border-neutral text-center text-2xl font-light">
		{$LL.pages.arts.title()}
	</h1>

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
</div>
