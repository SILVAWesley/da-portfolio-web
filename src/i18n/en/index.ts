import type { Translation } from '../i18n-types.js';

const en = {
	// this is an example Translation, just rename or delete this folder if you want
	HI: 'Hello, Very Good',
	seo: {
		language: 'en-us'
	},
	sitemap: {
		arts: {
			name: 'Arts',
			title: 'Arts',
			seo: {
				title: 'Lilia Graziely graphic artist portfolio: arts, drawings, illustrations and tattos',
				description:
					'Lilia Graziely is a graphic artist specialized in digital arts, paints, drawings, illustrations and tattos. Contact via linkedin, instagram or email',
				keywords:
					'graphic design, lilia graziely, portfolio, hire graphic design, graphic design jobs, art, ai art generator, deviant art, digital art'
			}
		},
		about: {
			name: 'About',
			title: 'About',
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
	header: {
		name: 'LILIA GRAZIELY',
		profession: 'Graphic Designer',
		navigation: {
			ariaLabel: 'Main Menu'
		},
		languageMenu: {
			ariaLabel: 'Change language'
		},
		themeMenu: {
			ariaLabel: 'Change theme',
			themes: { system: 'System', dark: 'Dark', light: 'Light' }
		}
	}
} satisfies Translation;

export default en;
