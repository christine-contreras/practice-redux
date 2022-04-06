//create reducer in an easy way
import { createSlice } from '@reduxjs/toolkit'

export const eatenSushisSlice = createSlice({
  name: 'eatenSushis',
  initialState: { value: [] },
  reducers: {
    addSushiToEatenSushis: (state, action) => {
      state.value = [...state.value, action.payload]
    },
  },
})

export const { addSushiToEatenSushis } = eatenSushisSlice.actions
export default eatenSushisSlice.reducer
