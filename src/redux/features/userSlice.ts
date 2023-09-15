import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  uid: null,
  username: null,
  email: null,
  avatar: null,
  isLoading: false,
  isLoged: false,
  timelineDevits: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.uid = payload.uid
      state.username = payload.username
      state.email = payload.email
      state.avatar = payload.avatar
      state.isLoading = false
      state.isLoged = true
    },
    setIsLoading: (state, { payload }: { payload: boolean }) => {
      state.isLoading = payload
    },
    setTimelineDevits: (state, { payload }) => {
      state.timelineDevits = payload
    }
  }
})

export const { setUser, setIsLoading, setTimelineDevits } = userSlice.actions

export default userSlice.reducer
