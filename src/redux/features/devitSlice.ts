import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  userId: null,
  avatar: null,
  content: null,
  username: null,
  status: 'empty' // loading | error | success
}

export const devitSlice = createSlice({
  name: 'devit',
  initialState,
  reducers: {
    addDevit: (state, { payload }) => {
      state.avatar = payload.avatar
      state.content = payload.content
      state.userId = payload.userId
      state.username = payload.username
      state.status = 'success'
    },
    clearDevit: (state) => {
      state.avatar = null
      state.content = null
      state.userId = null
      state.username = null
      state.status = 'empty'
    },
    loadingDevit: (state, { payload }) => {
      state.status = (payload === true) ? 'loading' : 'success'
    },
    errorDevit: (state) => {
      state.status = 'error'
    }
  }
})

export const { addDevit, clearDevit, loadingDevit, errorDevit } = devitSlice.actions

export default devitSlice.reducer
