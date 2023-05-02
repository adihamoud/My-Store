const initialState = {
    photos: [],
    category: '',
  };
  
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