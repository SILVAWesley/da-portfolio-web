export function clickOutside(node: HTMLElement, handler: (e?: MouseEvent) => void) {
	function handleClick(e: MouseEvent) {
		if (node && e.target && !node.contains(e.target as HTMLElement)) {
			handler(e);
		}
	}

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
