<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let active = false;
	export let href: string;
	let className = '';

	export { className as class };

	const linkStyle = active && 'font-semibold underline';
</script>

<li class={className}>
	<a
		class={twMerge(`link-hover underline-offset-4`, linkStyle)}
		{href}
		aria-current={active ? 'page' : 'false'}
		on:click={(e) => {
			active && e.preventDefault();
		}}
	>
		<slot />
	</a>
</li>
