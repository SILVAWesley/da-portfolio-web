const breakpoints = {
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	'2xl': '1536px'
};

type TBreakpoint = keyof typeof breakpoints;

export function matchBreakpoint(breakpoint: TBreakpoint) {
	const media = window.matchMedia(`(min-width: ${breakpoints[breakpoint]}`);
	return media.matches;
}
