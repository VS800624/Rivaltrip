import { createSlice } from "@reduxjs/toolkit";


const destinationSlice = createSlice({
  name: "destination",
  initialState: {
    destinations : [],
    isLoading: true
  },
  reducers: {
    addDestination: (state, action) => {
      state.destinations = action.payload
      state.isLoading = false
    },
    removeDestination: (state, action) => {
      state.destinations = []
      state.isLoading = false
    }
  }
})

// here we are taking out these actions individually, and exporting it.
export const {addDestination, removeDestination} = destinationSlice.actions

export default destinationSlice.reducer