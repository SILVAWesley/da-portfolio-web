export function convertSocialMediaUrlToStr(url: string) {
	const index = url.lastIndexOf('/');

	if (index >= 0) {
		return url.slice(index + 1);
	}

	return '';
}
