import type { Locales } from '$i18n';
import type { ICmsRes } from '$types';
import type { IArt } from '$types/Art.types';
import api from './api';

export class ArtService {
	static async getAll(locale: Locales, page: number) {
		const url = '/arts';

		const {
			data: { data }
		} = await api.get<ICmsRes<IArt[]>>(url, {
			params: { locale, 'pagination[page]': page, 'pagination[pageSize]': 10, populate: 'images' }
		});

		return data;
	}
}
