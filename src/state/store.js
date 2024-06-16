import { configureStore } from '@reduxjs/toolkit'

// STATES
import adminSlice from '@states/Admin/adminSlice'

export const store = (window) => {
  return configureStore({
    reducer: {
      admin: adminSlice
    },
    preloadedState: window?.INITIAL_STATE || {},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      })
  })
}
