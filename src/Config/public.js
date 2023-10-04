import axios from 'axios';
import {API_URL, PUBLIC_URL} from './index';

const publicurl = axios.create({
    baseURL: PUBLIC_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
});

// Add an Axios request interceptor to set the Authorization header conditionally
publicurl.interceptors.request.use(
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

export default publicurl;
