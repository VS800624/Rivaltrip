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

// so destinationSlice is kind of like a big object which have actions and reducers so we are doing export default  destinationSlice.reducer , we are giving the reducer 
// A reducer is the combination of many small reducers destinationSlice.reducer is the combination of above reducers i.e. addDestination and removeDestination (that is why it is written as reducers) 