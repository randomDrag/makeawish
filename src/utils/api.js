import axios from 'axios';

const api = axios.create({
    baseURL : "https://makewish-server.herokuapp.com/",
    responseType: "json",
    withCredentials: true,
});


export {api};