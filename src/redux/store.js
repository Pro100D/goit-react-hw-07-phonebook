import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from '../redux/redurers';

export const store = configureStore({
  reducer: rootReducer,
});
