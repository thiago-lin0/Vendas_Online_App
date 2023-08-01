import { configureStore } from '@reduxjs/toolkit';

import globalReducer from './reducers/globalReducers';
import userReducer from './reducers/userReducers';

export const store = configureStore({
  reducer: {
    userReducer,
    globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
