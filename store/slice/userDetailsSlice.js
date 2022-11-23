import { createSlice } from '@reduxjs/toolkit'

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: {
    details:[]
  },
  reducers: {
    addData:(state,action) => {
        state.details.push(action.payload)
    },
    loadData:(state,action) => {
        state.details = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addData, loadData } = userDetailsSlice.actions

export default userDetailsSlice.reducer