import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('musicPlayerUser')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('musicPlayerUser')).token}`;
    }

    return req;
});
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const save = (code) => API.post('/save', code);
export const getCode = (userId) => API.post('/getCode', { userId });