<script lang="ts">
	import { clickOutside } from '$utils';
	import { focusTrap } from '$utils/focus-trap';
	import { onDestroy, onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { browser } from '$app/environment';
	import { getFocusableElements } from '$utils/focusable-elements';

	let open = false;
	let className = '';
	export { className as class };
	export let listClass = '';

	let summaryNode: HTMLElement;

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape' && open) {
			open = false;
			summaryNode.focus();
		}
	}

	onMount(() => {
		return () => {
			document.body.removeEventListener('keydown', handleKeyDown);
		};
	});

	$: {
		if (browser) {
			if (open) {
				document.body.classList.add('pointer-events-none');
				document.body.classList.add('overflow-hidden');
			} else {
				document.body.classList.remove('pointer-events-none');
				document.body.classList.remove('overflow-hidden');
			}

			open
				? document.body.addEventListener('keydown', handleKeyDown)
				: document.body.removeEventListener('keydown', handleKeyDown);
		}
	}
</script>

<details
	class={twMerge('dropdown dropdown-end dropdown-bottom', className)}
	bind:open
	use:clickOutside={() => {
		open = false;
	}}
>
	<summary
		bind:this={summaryNode}
		class="btn btn-ghost"
		aria-haspopup="menu"
		aria-expanded={open}
		aria-controls="mymenu"><slot name="summary" /></summary
	>

	{#if open}
		<ul
			id="mymenu"
			role="menu"
			class={twMerge(
				'menu dropdown-content pointer-events-auto z-10 mt-1 w-56 gap-1 rounded-box bg-base-200 p-4 shadow',
				listClass
			)}
			use:focusTrap={open}
		>
			<slot name="list" />
		</ul>
	{/if}
</details>
