import type { BaseTranslation } from '../i18n-types.js';

const pt_BR = {
	general: {
		name: 'LILIA GRAZIELY',
		profession: 'Designer Gráfica',
		language: 'pt-br'
	},
	pages: {
		arts: {
			title: 'Minhas Artes',
			seo: {
				title: 'Lilia Graziely artista gráfica portfolio: artes, ilustrações, desenhos e tatuagens',
				description:
					'Artes de Lilia Graziely, uma artista gráfica especializada em arte digital, pinturas, desenhos, ilustrações e tatuagens. Contato por linkedin, instagram e email',
				keywords:
					'design gráfico, lilia graziely, portfólio, contratar artista gráfico, artista gráfico trabalho, arte, gerador de arte ia, arte digital'
			}
		},
		about: {
			title: 'Sobre Mim',
			seo: {
				title:
					'Sobre Lilia Graziely, artista gráfica. Especializada em artes, ilustrações, desenhos e tatuagens',
				description:
					'Lilia Graziely é uma artista gráfica especializada em arte digital, pinturas, desenhos, ilustrações e tatuagens. Contato por linkedin, instagram e email',
				keywords:
					'design gráfico, lilia graziely, portfólio, sobre, história de vida, artista gráfico trabalho, contratar artista gráfico'
			}
		}
	},
	artCard: {
		label: 'arte',
		roleDescription: 'carrossel',
		tablistLabel: 'Escolha o slide para exibir'
	},
	header: {
		name: 'LILIA GRAZIELY',
		profession: 'Designer Gráfica',
		drawer: { open: 'Abrir menu' },
		navigation: {
			ariaLabel: 'Menu Principal',
			name: 'Páginas'
		},
		languageMenu: {
			ariaLabel: 'Mudar idioma',
			name: 'Idioma'
		},
		themeMenu: {
			ariaLabel: 'Mudar tema',
			name: 'Tema',
			themes: { system: 'Sistema', dark: 'Escuro', light: 'Claro' }
		}
	},
	footer: {
		contact: {
			title: 'Contato',
			email: { ariaLabel: 'Enviar email para {0:string}' },
			instagram: { ariaLabel: 'Abrir instagram {0:string}' },
			linkedin: { ariaLabel: 'Abrir linkedin {0:string}' }
		},
		pages: { title: 'Páginas', navLabel: 'Seletor de página' },
		language: { title: 'Idioma', navLabel: 'Seletor de idioma' }
	}
} satisfies BaseTranslation;

export default pt_BR;
