<script lang="ts">
	import { LL } from '$i18n';
	import type { EmblaCarouselType } from 'embla-carousel';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
	import type { ArtCardProps } from './ArtCard.types';

	type $$Props = ArtCardProps;

	export let images: $$Props['images'];

	let api: EmblaCarouselType | undefined = undefined;

	let currentSlide: number = 0;

	function onInit(event: CustomEvent<EmblaCarouselType>) {
		const emblaApi = event.detail;
		api = emblaApi;

		emblaApi.on('select', (e) => {
			currentSlide = e.selectedScrollSnap();
		});
	}
</script>

<section
	class="flex flex-col items-center gap-2"
	aria-roledescription="carousel"
	aria-label="art"
	aria-atomic="false"
	aria-live="polite"
>
	<div
		class="overflow-hidden"
		use:emblaCarouselSvelte={{ options: {}, plugins: [WheelGesturesPlugin()] }}
		on:emblaInit={onInit}
		role="region"
	>
		<div class="flex">
			{#each images as { id, src, alt }, i (id)}
				<div
					id={`artslide-${id}`}
					aria-labelledby={`arttab-${id}`}
					role="tabpanel"
					aria-roledescription="slide"
					class="min-w-0 shrink-0 grow-0 basis-full"
				>
					<a tabindex={currentSlide !== i ? -1 : 0} href={`?id=${id}`}>
						<img {alt} {src} class="aspect-square object-cover" />
					</a>
				</div>
			{/each}
		</div>
	</div>

	<!-- Dots -->
	{#if images.length > 1}
		<div
			class="flex gap-3"
			role="tablist"
			aria-label={$LL.artCard.tablistLabel()}
			aria-orientation="horizontal"
		>
			{#each images as { id }, i (id)}
				<button
					aria-controls={`artslide-${id}`}
					aria-selected={currentSlide === i ? 'true' : 'false'}
					aria-label={`Slide ${i + 1}`}
					id={`arttab-${id}`}
					role="tab"
					class="flex h-6 w-6 items-center justify-center rounded-full"
					on:click={() => {
						api?.scrollTo(i);
					}}
				>
					<div
						class="h-4 w-4 rounded-full border border-base-content"
						class:bg-base-content={currentSlide === i}
					/>
				</button>
			{/each}
		</div>
	{/if}

	{#if images.length === 1}
		<div class="h-6" />
	{/if}
</section>
