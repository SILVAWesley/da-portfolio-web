<script lang="ts">
	import { XIcon } from '$assets';

	export let open = false;
</script>

<div class="drawer drawer-end">
	<input id="nav-drawer-mobile" type="checkbox" class="drawer-toggle" bind:checked={open} />

	<div class="drawer-side">
		<label for="nav-drawer-mobile" aria-label="close sidebar" class="drawer-overlay" />

		<div class="min-h-full w-80 bg-base-100">
			<label for="nav-drawer-mobile" aria-label="close sidebar" class="btn btn-ghost fill-current"
				><XIcon width="32px" height="32" /></label
			>
			<h2 class="text-base-content">my drawer</h2>
		</div>
	</div>
</div>
