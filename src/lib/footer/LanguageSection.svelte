<script lang="ts">
	import { page } from '$app/stores';
	import { LL, isLocale, locale } from '$i18n';
	import { replaceLocaleInUrl, siteLocales } from '$utils';
	import FooterSection from './FooterSection.svelte';

	let clazz: string = '';
	export { clazz as class };
</script>

<FooterSection title={$LL.footer.language.title()} class={clazz}>
	<nav aria-label={$LL.footer.language.navLabel()}>
		<ul class="flex w-full flex-col gap-1">
			{#each siteLocales as { id, code, name } (id)}
				<li>
					<a
						class="link-hover link"
						class:font-semibold={code === $locale}
						class:underline={code === $locale}
						href={`${replaceLocaleInUrl($page.url, isLocale(code) ? code : 'pt-BR', true)}`}
						aria-current={code === $locale ? 'page' : 'false'}>{name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</FooterSection>
