import axios from 'axios';
import type {
    Topic
} from './api_interfaces';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.API_KEY,
        language: 'pt-BR'
    }
});

const Api = {
    getHomeList: async function (): Promise<Array<Topic>> {
        let homeList : Array<Topic> = [
            {
                slug: 'originals',
                title: "Originais do Netflix",
                items: await this.getOriginals()
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await this.getTrending()
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await this.getTopRatedMovies()
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await this.getMoviesByGenre(28)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await this.getMoviesByGenre(35)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await this.getMoviesByGenre(27)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await this.getMoviesByGenre(10749)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await this.getMoviesByGenre(99)
            }
            
        ];

        return homeList;
    },
    getOriginals: async () => {
        return axiosInstance.get("/discover/tv?with_network=213")
            .then(({ data }) => data);
    },
    getTrending: async () => {
        return axiosInstance.get("/trending/all/week")
            .then(({ data }) => data);
    },
    getTopRatedMovies: async () => {
        return axiosInstance.get("/movie/top_rated")
            .then(({ data }) => data);
    },
    getMoviesByGenre: async (genreCode: number) => {
        return axiosInstance.get(`/discover/movie?with_genres=${genreCode}`)
            .then(({ data }) => data);
    }
}

export default Api;