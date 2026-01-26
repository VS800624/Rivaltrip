import { configureStore } from "@reduxjs/toolkit";
import destinationReducer from "./destinationSlice"
import bestDealsReducer from "./bestDealsSlice"

const appStore = configureStore({
  reducer: {
    destinations: destinationReducer,
    bestDeals: bestDealsReducer,
  }
})

export default appStore

// Note this reducer is a big reducer which contain small reducers like destinationReducer

// this appStore is the combination of this small reducer (destinationReducer)