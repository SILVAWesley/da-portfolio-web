<script lang="ts">
	import { LL } from '$i18n';
	import FooterSection from './FooterSection.svelte';
	import { EnvelopeIcon, InstagramIcon, LinkedinIcon, Logo } from '$assets';
	import { page } from '$app/stores';
	import type { PageData } from '../../routes/[lang=lang]/$types';
	import { convertSocialMediaUrlToStr } from '$utils';

	let clazz: string = '';
	export { clazz as class };

	let { email, instagram, linkedin } = ($page.data as PageData).info.attributes;

	$: contacts = [
		{
			id: 0,
			ariaLabel: $LL.footer.contact.email.ariaLabel(email),
			icon: EnvelopeIcon,
			text: email,
			href: `mailto:${email}`
		},
		{
			id: 1,
			ariaLabel: $LL.footer.contact.instagram.ariaLabel(instagram),
			icon: InstagramIcon,
			text: convertSocialMediaUrlToStr(instagram),
			href: instagram
		},
		{
			id: 2,
			ariaLabel: $LL.footer.contact.linkedin.ariaLabel(linkedin),
			icon: LinkedinIcon,
			text: convertSocialMediaUrlToStr(linkedin),
			href: linkedin
		}
	];
</script>

<FooterSection title={$LL.footer.contact.title()} class={clazz}>
	<div class="flex flex-col gap-3 fill-current">
		{#each contacts as { id, ariaLabel, href, icon, text } (id)}
			<a
				class="text-md link-hover link flex w-fit items-center gap-2 fill-current"
				{href}
				aria-label={ariaLabel}
			>
				<svelte:component this={icon} aria-hidden="true" />
				{text}
			</a>
		{/each}
	</div>
</FooterSection>
