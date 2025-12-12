import { configureStore } from '@reduxjs/toolkit'
import userReducer from './feature/userSlice'
import staffReducer from './feature/staffSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    staff: staffReducer,

  },
})