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
export const addFavorite = (code) => API.post('/addFavorite', code);
export const removeFavorite = (code) => API.post('/removeFavorite', code);
export const getSong = (code) => API.post('/getSongs', code); /* to get the song only when it is to be played */
export const getSongDetails = (code) => API.post('/getSongDetails', code); /* get details on load time */
export const addSong = (songDetails) => API.post('/addSong', songDetails);