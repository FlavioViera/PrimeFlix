import axios from 'axios';

// BASE DA URL: https://api.themoviedb.org/3/

//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=54c1cabd2f5d280cd03f7ec7b2ea23ca&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;