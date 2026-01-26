import { createSlice } from "@reduxjs/toolkit";


const businessClassSlice = createSlice({
  name: "businessClass",
  initialState: {
    businessClass: [],
    isLoading: true,
  },
  reducers: {
    addBusinessClass: (state,action) => {
      state.businessClass = action.payload,
      state.isLoading = false
    },
    removeBusinessClass: (state,action) => {
      state.businessClass = [],
      state.isLoading = false
    }
  }
})

export const {addBusinessClass, removeBusinessClass} = businessClassSlice.actions
export default businessClassSlice.reducer