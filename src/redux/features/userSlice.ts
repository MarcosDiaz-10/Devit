import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  username: null,
  email: null,
  avatar: null,
  isLoading: false,
  isLoged: false,
  isFirstCharged: true
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.username = payload.username
      state.email = payload.email
      state.avatar = payload.avatar
      state.isLoading = false
      state.isLoged = true
      state.isFirstCharged = false
    },
    setIsLoading: (state, { payload }: { payload: boolean }) => {
      state.isLoading = payload
      state.isFirstCharged = false
    }
  }
})

export const { setUser, setIsLoading } = userSlice.actions

export default userSlice.reducer
