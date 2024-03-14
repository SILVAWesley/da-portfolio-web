<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { v4 as uuid } from 'uuid';

	let clazz: string = '';

	export let title: string;
	export { clazz as class };

	let headerId = `footer_section_heading_${uuid()}`;
</script>

<section class={clazz} aria-labelledby={headerId}>
	<h3 id={headerId} class="footer-title">{title}</h3>

	<slot />
</section>
