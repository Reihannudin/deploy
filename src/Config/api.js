import axios from 'axios';
import { API_URL } from './index';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});

// Add an Axios request interceptor to set the Authorization header conditionally
api.interceptors.request.use(
    (config) => {
        const auth_token = localStorage.getItem('auth_token');
        if (auth_token) {
            config.headers['Authorization'] = `Bearer ${auth_token}`;
        } else {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
