//create reducer in an easy way
import { createSlice } from '@reduxjs/toolkit'

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: { value: 100 },
  reducers: {
    updateWallet: (state, action) => {
      state.value = action.payload
    },
  },
})

export default walletSlice.reducer
