import { isVisible } from './is-visible';

export const focusableElements = [
	'a[href]',
	'area[href]',
	'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
	'select:not([disabled]):not([aria-hidden])',
	'textarea:not([disabled]):not([aria-hidden])',
	'button:not([disabled]):not([aria-hidden])',
	'iframe',
	'object',
	'embed',
	'[contenteditable]',
	'[tabindex]:not([tabindex^="-"])'
];

export function getFocusableElements(node?: HTMLElement) {
	const focusables = [...(node?.querySelectorAll(focusableElements as any) ?? [])];
	return focusables.filter(isVisible);
}
