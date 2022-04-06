//create reducer in an easy way
import { createSlice } from '@reduxjs/toolkit'

export const sushisSlice = createSlice({
  name: 'sushis',
  initialState: { value: [] },
  reducers: {
    updateSushis: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { updateSushis } = sushisSlice.actions
export default sushisSlice.reducer
