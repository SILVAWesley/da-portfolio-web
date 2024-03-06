<script lang="ts">
	import { LL } from '$i18n';

	export let page: keyof typeof $LL.sitemap;
</script>

<title
	>{$LL.sitemap[page].title()} - Lilia Graziely - Graphic Artist - liliagraziely@gmail.com</title
>

<meta name="title" content={$LL.sitemap[page].seo.title()} />
<meta name="description" content={$LL.sitemap[page].seo.description()} />
<meta name="keywords" content={$LL.sitemap[page].seo.keywords()} />
