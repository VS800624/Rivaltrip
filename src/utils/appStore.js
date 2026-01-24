import { configureStore } from "@reduxjs/toolkit";
import destinationReducer from "./destinationSlice"

const appStore = configureStore({
  reducer: {
    destinations: destinationReducer,
  }
})

export default appStore

// Note this reducer is a big reducer which contain small reducers like userReducer

// this appStore is the combination of this small reducer (userReducer)