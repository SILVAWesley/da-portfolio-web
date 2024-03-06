<script lang="ts">
	import { page } from '$app/stores';
	import { baseLocale, locales } from '$i18n/i18n-util';
	import { replaceLocaleInUrl } from '$utils';
	import { LL } from '$i18n';
</script>

<!-- locale -->
{#each locales as locale (locale)}
	<link rel="alternate" hreflang={locale} href={replaceLocaleInUrl($page.url, locale)} />
{/each}
<link rel="alternate" hreflang="x-default" href={replaceLocaleInUrl($page.url, baseLocale)} />

<meta name="language" content={$LL.seo.language()} />
