


// use axios
// 1. define the url and header, make file api.js

// example

import axios from "axios";
import {content} from "../../tailwind.config";

const api = axios.create({
    baseURL : 'http://127.0.0.1:8000/api',
    headers : {
        'Access-Control-Allow-Origin' : "*",
        'Content-Type' :  'application/json'
    },
})

// 2. add axios request interceptor to set AUTH header
api.interceptors.request.use(
    (config) => {
        const auth_token = localStorage.getItem('auth_token');
        if (auth_token){
            config.headers['Authorization'] = `Bearer ${auth_token}`;
        }else {
            const token = localStorage.getItem('token');
            if (token){
                config.headers['Authorization'] = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

// How use axios
//igive sample in Login Case yap

const email = "reedbulls91@gmail.com";
const password = "123456789";

// const onChangeEmail = (event) => {
//     const email = event.target.value;
//     setEmail(email);
// };
const handleSumbit = async (event) =>{
    event.preventDefault();

    try {
        const formData = {
            email : email,
            password : password
        }

        const response = await api.post('/login' , formData);
        const responseData = response.data;

        // navigate(responseData.data?.redirect_path || "/");


    }catch (error){
    }
}