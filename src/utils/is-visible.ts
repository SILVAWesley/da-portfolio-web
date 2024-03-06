export function isVisible(element: HTMLElement) {
	const computedStyle = document.defaultView?.getComputedStyle(element, null);

	return (
		computedStyle?.getPropertyValue('display') !== 'none' &&
		computedStyle?.getPropertyValue('visibility') !== 'hidden'
	);
}
