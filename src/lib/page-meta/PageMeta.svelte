<script lang="ts">
	import { LL } from '$i18n';
	import { page } from '$app/stores';
	import type { PageData } from '../../routes/[lang=lang]/$types';

	export let pageName: keyof typeof $LL.pages;

	let { email } = ($page.data as PageData).info.attributes;
</script>

<title>{$LL.pages[pageName].title()} - Lilia Graziely - Graphic Artist - {email}</title>

<meta name="title" content={$LL.pages[pageName].seo.title()} />
<meta name="description" content={$LL.pages[pageName].seo.description()} />
<meta name="keywords" content={$LL.pages[pageName].seo.keywords()} />
