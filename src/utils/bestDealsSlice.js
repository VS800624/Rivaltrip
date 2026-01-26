import { createSlice } from "@reduxjs/toolkit";


const bestDealsSlice = createSlice({
  name: "bestDeals",
  initialState: {
    bestDeals: [],
    isLoading: true
  },
  reducers: {
    addBestDeals: (state,action) => {
      state.bestDeals = action.payload
      state.isLoading = false
    },
    removeBestDeals: (state,action) => {
      state.bestDeals = []
      state.isLoading = false
    }
  }
})

export const {addBestDeals, removeBestDeals} = bestDealsSlice.actions
export default bestDealsSlice.reducer