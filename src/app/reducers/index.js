// Import Redux's combineReducers utility and the photosReducer
import { combineReducers } from 'redux';
import photosReducer from './photosReducer';

// Combine and export reducers
// 'photos' state is managed by the photosReducer
export default combineReducers({
  photos: photosReducer,
});
