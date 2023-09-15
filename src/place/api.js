/**
 * @module API
 */

import axios from 'axios';

import { API_STATUS } from '../utility/enums';

/**
 * @constant {string}
 */
const BASE_URL = 'https://api.themoviedb.org/3';

/**
 * API Access Token for authentication.
 * @constant {string}
 */
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjE5MGM4MjM3Mzg0OTY2NWYzM2YyMmI4MDM3NDJmZSIsInN1YiI6IjY0ZmU0ZTEwYzJmZjNkMDEzODEwYWQ3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qAyw2M4B5Oc0iHxhZPqeR7qa-ZpOttbbi0mr0K6vwUY';

/**.
 * @const {AxiosInstance}
 */
const api = axios.create({
  baseURL: BASE_URL,
  //   timeout: 5000,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

/**
 * @const {object}
 * @property {function} getMovies 
 * @property {function} searchMovie 
 */
const API = {
  /**
   * @async
   * @function getMovie
   * @returns {Promise<object>} 
   * @throws {Error} .
   */
  getMovie: async (movieId) => {
    try {
      const response = await api.get(`/movie/${movieId}?language=en-US`);

      const { status, data } = response;

      if (status === 200) {
        return {
          status: API_STATUS.SUCCEEDED, 
          data,
        };
      } else {
        return {
          status: API_STATUS.ERROR,
          data: null,
        };
      }
    } catch (error) {
      return {
        status: API_STATUS.ERROR,
        data: null,
      };
    }
  },

  /**
   * @async
   * @function getMovies
   * @returns {Promise<object>}
   * @throws {Error} 
   */
  getMovies: async () => {
    try {
      const response = await api.get('/movie/top_rated');

      const { status } = response;
      const { results } = response.data;

      if (status === 200) {
        return {
          status: API_STATUS.SUCCEEDED, 
          data: results,
        };
      } else {
        return {
          status: API_STATUS.ERROR, 
          data: null,
        };
      }
    } catch (error) {
      return {
        status: API_STATUS.ERROR, 
        data: null,
      };
    }
  },

  /**
   * @async
   * @function searchMovie
   * @param {string} query
   * @returns {Promise<object>} 
   * @throws {Error} 
   */
  searchMovie: async (query) => {
    try {
      const response = await api.get(
        `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
      );

      const { status } = response;
      const { results } = response.data;

      if (status === 200) {
        return {
          status: API_STATUS.SUCCEEDED, 
          data: results,
        };
      } else {
        return {
          status: API_STATUS.ERROR, 
          data: null,
        };
      }
    } catch (error) {
      return {
        status: API_STATUS.ERROR, 
        data: null,
      };
    }
  },

  /**
   * @async
   * @function getVideoKey
   * @returns {Promise<object>} 
   * @throws {Error} 
   */
  getVideoKey: async (movieId) => {
    try {
      const response = await api.get(`/movie/${movieId}/videos`);

      const { status } = response;
      const { results } = response.data;
      const { key } = results[0];

      if (status === 200) {
        return {
          status: API_STATUS.SUCCEEDED, 
          data: key,
        };
      } else {
        return {
          status: API_STATUS.ERROR, 
          data: null,
        };
      }
    } catch (error) {
      return {
        status: API_STATUS.ERROR, 
        data: null,
      };
    }
  },
};

export default API;
