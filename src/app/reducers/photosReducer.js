/**
 * Initial state for the 'photos' section of the Redux store. 
 * Holds an array 'photos' for photo data and a string 'category' for the current category.
 * @type {Object}
 */
const initialState = {
  photos: [],
  category: '',
};

/**
* Reducer for 'photos' state. Determines state changes in response to dispatched actions.
* 
* @param {Object} state - Present state, defaults to initialState if undefined.
* @param {Object} action - The dispatched action.
* @returns {Object} - The updated state.
*/
export default function photosReducer(state = initialState, action) {
  switch (action.type) {
      case 'FETCH_PHOTOS':
          return {
              ...state,
              photos: action.payload.photos,
          };
      case 'SET_CATEGORY':
          return {
              ...state,
              category: action.payload.category,
          };
      default:
          return state;
  }
}
