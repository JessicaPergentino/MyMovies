import {ListMoviesResponse, MovieDetails} from '../model/interfaces';
import {ListMoviesServices} from './api';

const listMoviesServices = new ListMoviesServices();

const getMoviesPopular = async (): Promise<ListMoviesResponse> =>
  listMoviesServices.getMoviesPopular();
const getMoviesUpcoming = async (): Promise<ListMoviesResponse> =>
  listMoviesServices.getMoviesUpcoming();

const getMovieDetails = async (id: number): Promise<MovieDetails> =>
  listMoviesServices.getMovieDetails(id);

export {getMoviesPopular, getMoviesUpcoming, getMovieDetails};
