import axios from 'axios';
import {
  ListMoviesResponse,
  MovieDetails,
} from '../model/interfaces';
import {TOKEN} from '@env';

const BASE_URL = 'https://api.themoviedb.org/3/movie';

class ListMoviesServices {
  getMoviesPopular = async (): Promise<ListMoviesResponse> => {
    const uri = `${BASE_URL}/popular`;

    try {
      const response = await axios.get(uri, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        params: {
          language: 'pt-BR',
          page: 1,
        },
      });
      return response.data;
    } catch (error) {
      return {page: 0, results: []};
    }
  };

  getMoviesUpcoming = async (): Promise<ListMoviesResponse> => {
    const uri = `${BASE_URL}/upcoming`;

    try {
      const response = await axios.get(uri, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        params: {
          language: 'pt-BR',
          page: 1,
          'release_date.gte': '2025-01-01',
        },
      });
      return response.data;
    } catch (error) {
      return {page: 0, results: []};
    }
  };

  getMovieDetails = async (id: number): Promise<MovieDetails> => {
    const uri = `${BASE_URL}/${id}`;

    try {
      const response = await axios.get(uri, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        params: {
          language: 'pt-BR',
        },
      });
      return response.data;
    } catch (error) {
      return {
        id: 0,
        title: '',
        overview: '',
        release_date: '',
        poster_path: '',
        backdrop_path: '',
        vote_average: 0,
        vote_count: 0,
        genres: [],
        adult: false,
        budget: 0,
        homepage: '',
        imdb_id: '',
        original_language: '',
        original_title: '',
        origin_country: [],
        popularity: 0,
        revenue: 0,
        runtime: 0,
        status: '',
        tagline: '',
        video: false,
      };
    }
  };
}

export {ListMoviesServices};
