<script lang="ts">
	import { Logo } from '$assets';
	import { LL } from '$i18n';
	import ContactSection from './ContactSection.svelte';
	import Dev from './Dev.svelte';
	import LanguageSection from './LanguageSection.svelte';
	import PagesSection from './PagesSection.svelte';
</script>

<footer class="mt-4 flex flex-col items-center rounded-t-lg bg-base-300 px-6 py-8">
	<div class="grid w-full max-w-screen-2xl grid-cols-2 items-start lg:grid-cols-6">
		<div class="col-span-2 flex flex-row items-center gap-2 sm:col-span-1 lg:col-span-2">
			<Logo class="stroke h-14 w-14 fill-transparent stroke-base-content" aria-hidden="true" />

			<div class="flex flex-col justify-center">
				<h2 class="font-sans text-xl font-semibold leading-tight tracking-wider">
					{$LL.general.name()}
				</h2>

				<h3 class="text-md italic leading-none tracking-wider">
					{$LL.general.profession()}
				</h3>
			</div>
		</div>

		<div class="divider col-span-2 sm:hidden" />

		<ContactSection class="col-span-2 sm:col-span-1 lg:col-span-2" />

		<div class="divider col-span-2 lg:hidden" />

		<PagesSection class="col-span-1" />

		<LanguageSection class="col-span-1" />
	</div>

	<Dev />
</footer>
