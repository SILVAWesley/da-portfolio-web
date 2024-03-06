import Mousetrap from 'mousetrap';
import { getFocusableElements } from './focusable-elements';

export function focusTrap(node: HTMLElement, active?: boolean) {
	function getFocused() {
		const focusables = getFocusableElements(node);

		const current = document.activeElement;
		const index = focusables.indexOf(current);
		return { element: document.activeElement as HTMLElement, index, inArray: index >= 0 };
	}

	function focusFirst() {
		const focusables = getFocusableElements(node);

		focusables[0] && focusables[0].focus();
	}

	function focusLast() {
		const focusables = getFocusableElements(node);

		focusables[focusables.length - 1] && focusables[focusables.length - 1].focus();
	}

	function focusNext() {
		const focusables = getFocusableElements(node);
		const current = getFocused();

		if (!current.inArray || current.index === focusables.length - 1) {
			focusables[0].focus();
			return;
		}

		focusables[current.index] && focusables[current.index + 1].focus();
	}

	function focusPrevious() {
		const focusables = getFocusableElements(node);
		const current = getFocused();

		if (!current.inArray || current.index === 0) {
			focusables[focusables.length - 1].focus();
			return;
		}

		focusables[current.index] && focusables[current.index - 1].focus();
	}

	function bindKeys() {
		Mousetrap.bind(['alt+tab', 'shift+tab', 'up'], (e) => {
			handleKeypress(e, focusPrevious);
		});
		Mousetrap.bind(['tab', 'down'], (e) => {
			handleKeypress(e, focusNext);
		});

		Mousetrap.bind('end', (e) => {
			handleKeypress(e, focusLast);
		});
		Mousetrap.bind('home', (e) => {
			handleKeypress(e, focusFirst);
		});

		const { element } = getFocused();
		element && element.blur && element.blur();
	}

	function unbindKeys() {
		Mousetrap.unbind(['alt+tab', 'shift+tab', 'up', 'tab', 'end', 'home', 'down']);
	}

	active ? bindKeys() : unbindKeys();

	return {
		update(newActive: boolean) {
			newActive ? bindKeys() : unbindKeys();
		},
		destroy() {
			unbindKeys();
		}
	};
}

function handleKeypress(e: KeyboardEvent, cb: () => void) {
	e.preventDefault();
	e.stopPropagation();
	cb();
}
