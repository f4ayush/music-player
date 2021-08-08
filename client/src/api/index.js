import axios from 'axios';

const API = axios.create({ baseURL: 'https://music-player-ayush.herokuapp.com/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('musicPlayerUser')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('musicPlayerUser')).token}`;
    }
    return req;
});
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const addFavorite = (data) => API.post('/user/addFavorite', data);
export const deleteFavorite = (data) => API.post('/user/deleteFavorite', data);
export const getFavorite = (userId) => API.post('/user/getFavorite', { userId });
export const getSong = () => API.get('/songs/getSongs'); /* to get the song only when it is to be played */
export const getSongSrc = (data) => API.post('/songs/getSongSrc', data); /* get details on load time */
export const addSong = (songDetails) => API.post('/songs/addSong', songDetails);