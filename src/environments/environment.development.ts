const API_BASE_URL = 'https://job-portal-rcxk.onrender.com';

export const environment = {
  production: false,
  apiBaseUrl: API_BASE_URL,
  getUrl(method: string, module_entity: string = 'accounts'): string {
    return new URL(`api/${module_entity}/${method}/`, `${API_BASE_URL}/`).toString();
  }
};
