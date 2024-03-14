import axios from 'axios';

import { PUBLIC_CMS_URL } from '$env/static/public';

const api = axios.create({ baseURL: PUBLIC_CMS_URL });

export default api;
