import axios from 'axios';
import {API_URL} from "./index";


const api = axios.create({
    baseURL : API_URL,
    headers : {
        "Access-Control-Allow-Origin": "*",
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
    }
});

export default api