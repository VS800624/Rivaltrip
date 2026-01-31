import { configureStore } from "@reduxjs/toolkit";
import destinationReducer from "./destinationSlice"
import bestDealsReducer from "./bestDealsSlice"
import businessClassReducer from "./businessClassSlice"
import userReducer from "./userSlice"

const appStore = configureStore({
  reducer: {
    destinations: destinationReducer,
    bestDeals: bestDealsReducer,
    businessClass: businessClassReducer,
    user: userReducer,
  }
})

export default appStore

// Note this reducer is a big reducer which contain small reducers like destinationReducer

// this appStore is the combination of this small reducer (destinationReducer)