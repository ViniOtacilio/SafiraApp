//<ROOT>/shared/APIKit.js
import axios from 'axios';
import { API_URL } from '@env'

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  baseURL: 'http://52.67.109.30:3333/',
  // baseURL: 'http://localhost:3333/',
  timeout: 10000,
});

// Set JSON Web Token in Client to be included in all calls
// export const setClientToken = token => {
//   APIKit.interceptors.request.use(function(config) {
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   });
// };

export default APIKit;