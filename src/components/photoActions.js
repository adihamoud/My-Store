import axios from 'axios';

export const fetchPhotos = (category, page = 1) => async (dispatch) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}&page=${page}`
  );

  dispatch({
    type: 'FETCH_PHOTOS',
    payload: {
      photos: response.data.hits.slice(0, 9),
    },
  });
};

export const setCategory = (category) => ({
  type: 'SET_CATEGORY',
  payload: {
    category,
  },
});