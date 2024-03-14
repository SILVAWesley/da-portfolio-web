<script lang="ts">
	import { page } from '$app/stores';
	import { LL } from '$i18n';
	import { baseLocale, locales } from '$i18n/i18n-util';
	import { replaceLocaleInUrl } from '$utils';
</script>

{#each locales as locale (locale)}
	<link rel="alternate" hreflang={locale} href={replaceLocaleInUrl($page.url, locale)} />
{/each}

<link rel="alternate" hreflang="x-default" href={replaceLocaleInUrl($page.url, baseLocale)} />
<meta name="language" content={$LL.general.language()} />
