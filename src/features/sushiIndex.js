//create reducer in an easy way
import { createSlice } from '@reduxjs/toolkit'

export const sushiIndexSlice = createSlice({
  name: 'sushiIndex',
  initialState: { value: 0 },
  reducers: {
    updateIndex: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { updateIndex } = sushiIndexSlice.actions
export default sushiIndexSlice.reducer
