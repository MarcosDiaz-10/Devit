import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import userReducer from './features/userSlice'
import devitReducer from './features/devitSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    devit: devitReducer
  }
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
