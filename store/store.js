import { configureStore } from '@reduxjs/toolkit'
import userDetailsReducer from './slice/userDetailsSlice'

export default configureStore({
  reducer: {
    userDetails:userDetailsReducer
  },
})