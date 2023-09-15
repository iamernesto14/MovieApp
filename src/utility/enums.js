

/**
 * 
 * @readonly
 * @enum {string}
 * @property {string} IDLE 
 * @property {string} LOADING
 * @property {string} SUCCEEDED
 * @property {string} FAILED
 */
export const API_STATUS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
};

/**
 * The debounce time (in milliseconds) used for search operations.
 * @type {number}
 * @constant
 */
export const SEARCH_DEBOUNCE = 300;
