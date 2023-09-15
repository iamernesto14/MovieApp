

import { create } from 'zustand';
import { API_STATUS } from '../utility/enums';

import API from './api';

/**
 *
 * @returns {Object} 
 */
const useMovieStore = create((set) => ({
  /**
   * @type {Object}
   * @property {?Array} data 
   * @property {API_STATUS} status 
   */
  search: {
    data: null,
    status: API_STATUS.IDLE,
  },

  /**
   * @type {Object}
   * @property {?Array} data 
   * @property {API_STATUS} status 
   */
  movies: {
    data: null,
    status: API_STATUS.IDLE,
  },

  /**
   * @type {Object}
   * @property {?Object} data
   * @property {API_STATUS} status
   */
  movie: {
    data: null,
    status: API_STATUS.IDLE,
  },

  /**
   * @type {Object}
   * @property {?Object} data 
   * @property {API_STATUS} status 
   */
  movieKey: {
    data: null,
    status: API_STATUS.IDLE,
  },

  /**
   * @async
   * @param {number} movieId
   */
  getMovie: async (movieId) => {
    set((state) => ({
      ...state,
      movie: {
        ...state.movie,
        status: API_STATUS.LOADING,
      },
    }));

    const { data, status } = await API.getMovie(movieId);

    set((state) => ({
      ...state,
      movie: {
        ...state.movie,
        status,
        data,
      },
    }));
  },

  /**
   * @async
   */
  getMovies: async () => {
    set((state) => ({
      ...state,
      movies: {
        ...state.movies,
        status: API_STATUS.LOADING,
      },
    }));

    const { data, status } = await API.getMovies();

    set((state) => ({
      ...state,
      movies: {
        ...state.movies,
        status,
        data: data ? data.slice(0, 10) : data,
      },
    }));
  },

  /**
   *
   * @async
   * @param {string} query 
   */
  searchMovies: async (query) => {
    set((state) => ({
      ...state,
      search: {
        ...state.search,
        status: API_STATUS.LOADING,
      },
    }));

    const { data, status } = await API.searchMovie(query);

    set((state) => ({
      ...state,
      search: {
        ...state.search,
        status,
        data,
      },
    }));
  },

  /**
   * @async
   * @param {number} movieId 
   */
  getMovieKey: async (movieId) => {
    set((state) => ({
      ...state,
      movieKey: {
        ...state.movieKey,
        status: API_STATUS.LOADING,
      },
    }));

    const { data, status } = await API.getVideoKey(movieId);

    set((state) => ({
      ...state,
      movieKey: {
        ...state.movieKey,
        status,
        data,
      },
    }));
  },
}));

export default useMovieStore;
