import { genres } from './content';

/**
 * @param {number[]} genreIds
 * @returns {string} 
 */
export const getGenreByIds = (genreIds) => {
  const genreNames = genreIds.map((genreId) => {
    const genre = genres.find((item) => item.id === genreId);
    return genre ? genre.name : 'Unknown';
  });
  return genreNames.join(', ');
};
