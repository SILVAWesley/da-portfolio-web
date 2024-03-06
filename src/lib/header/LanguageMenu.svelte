<script lang="ts">
	import { browser } from '$app/environment';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { GlobeIcon } from '$assets';
	import { LL, isLocale, locale, setLocale, type Locales } from '$i18n';
	import { loadLocaleAsync } from '$i18n/i18n-util.async';
	import { DropdownMenu } from '$lib/dropdown-menu';
	import { CookiesStorage, replaceLocaleInUrl, siteLocales } from '$utils';

	const switchLocale = async (newLocale: Locales) => {
		if (!newLocale || $locale === newLocale) return;

		await loadLocaleAsync(newLocale);
		setLocale(newLocale);
		CookiesStorage.clientSetLocale(newLocale);

		invalidateAll();
	};

	$: browser && document.querySelector('html')!.setAttribute('lang', $locale);

	$: if (browser) {
		const lang = $page.params.lang as Locales;
		switchLocale(lang);
	}
</script>

<DropdownMenu>
	<GlobeIcon
		aria-label={$LL.header.languageMenu.ariaLabel()}
		slot="summary"
		class="fill-base-content"
	/>

	<svelte:fragment slot="list">
		{#each siteLocales as { id, code, name } (id)}
			<li>
				<a
					aria-checked={code === $locale}
					class="link-hover link"
					class:active={code === $locale}
					role="menuitemradio"
					href={`${replaceLocaleInUrl($page.url, isLocale(code) ? code : 'pt-BR', true)}`}>{name}</a
				>
			</li>
		{/each}
	</svelte:fragment>
</DropdownMenu>
