import type { Locales } from '$i18n';
import type { ICmsRes, IInfo } from '$types';
import api from './api';

export class InfoService {
	static async get(locale: Locales) {
		const url = '/info';

		const {
			data: { data }
		} = await api.get<ICmsRes<IInfo>>(url, {
			params: { locale }
		});

		return data;
	}
}
