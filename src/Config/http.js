import axios from "axios";

export default axios.create({
    baseURL:"http://127.0.0.1:8000",

    headers:{
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE' ,
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Access-Control-Allow-Headers' : 'Content-Type, X-Auth-Token, Origin, Authorization',
        "Content-type":"application/json",
        "Content-Type": "application/x-www-form-urlencoded",
    }
})