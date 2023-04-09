export const environment = {
  production: true,
  apiUrl: process.env['API_URL_PROD'] || 'Prod url not set',
  serverIp: process.env['SERVER_IP'] || 'Server ip not set',
  apiKey: '',
  apiMapKey: '',
  limit: 10,
}
