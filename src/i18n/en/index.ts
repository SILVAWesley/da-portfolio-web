import type { Translation } from '../i18n-types.js';

const en = {
	general: {
		name: 'LILIA GRAZIELY',
		profession: 'Graphic Designer',
		language: 'en-us'
	},
	pages: {
		arts: {
			title: 'My Arts',
			seo: {
				title: 'Lilia Graziely graphic artist portfolio: arts, drawings, illustrations and tattos',
				description:
					'Lilia Graziely is a graphic artist specialized in digital arts, paints, drawings, illustrations and tattos. Contact via linkedin, instagram or email',
				keywords:
					'graphic design, lilia graziely, portfolio, hire graphic design, graphic design jobs, art, ai art generator, deviant art, digital art'
			}
		},
		about: {
			title: 'About Me',
			seo: {
				title:
					'About Lilia Graziely, graphic designer. Specialized in arts, illustrations, drawings and tattos',
				description:
					'Lilia Graziely é uma artista gráfica especializada em arte digital, pinturas, desenhos, ilustrações e tatuagens. Contato por linkedin, instagram e email',
				keywords:
					'graphic design, lilia graziely, about, portfolio, hire graphic design, graphic design jobs, art, ai art generator, deviant art, digital art'
			}
		}
	},
	artCard: {
		label: 'art',
		roleDescription: 'carousel',
		tablistLabel: 'Choose slide to display'
	},
	header: {
		name: 'LILIA GRAZIELY',
		profession: 'Graphic Designer',
		drawer: { open: 'Abrir menu' },
		navigation: {
			ariaLabel: 'Main Menu',
			name: 'Pages'
		},
		languageMenu: {
			ariaLabel: 'Change language',
			name: 'Language'
		},
		themeMenu: {
			ariaLabel: 'Change theme',
			themes: { system: 'System', dark: 'Dark', light: 'Light' },
			name: 'Theme'
		}
	},
	footer: {
		contact: {
			title: 'Contact me',
			email: { ariaLabel: 'Send email to {0}' },
			instagram: { ariaLabel: 'Open instagram {0}' },
			linkedin: { ariaLabel: 'Open linkedin {0}' }
		},
		pages: { title: 'Pages', navLabel: 'Page picker' },
		language: { title: 'Language', navLabel: 'Language picker' }
	}
} satisfies Translation;

export default en;
