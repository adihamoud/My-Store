import axios from 'axios';

/**
 * Asynchronous action creator to fetch photos from an API based on category and page number.
 * 
 * @param {string} category - The category of photos to fetch.
 * @param {number} [page=1] - The page number to fetch. Defaults to 1.
 * @returns {Function} Thunk function that dispatches the 'FETCH_PHOTOS' action.
 */
export const fetchPhotos = (category, page = 1) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/photos?category=${category}&page=${page}`,
      { withCredentials: true } // Set withCredentials to true
    );
  const photos=response.data;
    dispatch({
      type: 'FETCH_PHOTOS',
      payload: {
        photos,
      },
    });
  } catch (error) {
    // Handle the error here
    console.log('Error fetching photos:', error);
  }
};

/**
 * Action creator to set the current category.
 *
 * @param {string} category - The category to set.
 * @returns {Object} The 'SET_CATEGORY' action.
 */
export const setCategory = (category) => ({
  type: 'SET_CATEGORY',
  payload: {
    category,
  },
});