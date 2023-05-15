// Import Redux Toolkit's store configuration function and our rootReducer
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Create and configure the store with rootReducer
const store = configureStore({
  reducer: rootReducer,
});

// Export the configured store
export default store;