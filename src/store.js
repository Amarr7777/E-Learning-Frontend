import { configureStore } from '@reduxjs/toolkit';
import courseSlice from './redux/courseSlice';

export const store = configureStore({
  reducer: {
    course: courseSlice,
  },
});
