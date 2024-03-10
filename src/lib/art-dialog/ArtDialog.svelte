<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { XIcon } from '$assets';
	import { focusTrap } from '$utils';

	let dialogNode: HTMLDialogElement;

	onMount(() => {
		dialogNode.showModal();
	});
</script>

<dialog
	class="modal"
	bind:this={dialogNode}
	on:close={() => {
		goto('/');
	}}
>
	<div
		class="modal-box flex max-h-full max-w-[calc(60vw)] rounded-xl bg-transparent p-0"
		use:focusTrap={true}
	>
		<img alt="hello" src="/art2.jpg" class="object-scale-down" width="100%" height="100%" />

		<form method="dialog" class="absolute top-[-32px]">
			<button class="btn btn-circle btn-ghost h-9 w-9 fill-current"><XIcon /></button>
		</form>
	</div>
	''
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
