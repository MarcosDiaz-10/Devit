import { type DevitType } from '@/helpers/types'
import { createSlice } from '@reduxjs/toolkit'

const usersLike: string[] = []
const usersComments: DevitType[] = []

export const initialState = {
  userId: null,
  avatar: null,
  content: null,
  username: null,
  status: 'empty', // loading | error | success
  img: '',
  id: '',
  createAt: 0,
  likesCount: 0,
  usersLike,
  usersComments
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
      state.img = payload.img ?? ''
      state.status = 'success'
      state.id = payload.id
      state.createAt = payload.createAt
      state.likesCount = 0
      state.usersLike = []
      state.usersComments = []
    },
    clearDevit: (state) => {
      state.avatar = null
      state.content = null
      state.userId = null
      state.username = null
      state.status = 'empty'
      state.img = ''
      state.id = ''
      state.createAt = 0
      state.likesCount = 0
    },
    loadingDevit: (state, { payload }) => {
      state.status = (payload === true) ? 'loading' : 'success'
    },
    errorDevit: (state) => {
      state.status = 'error'
    },
    addLikeDevit: (state, { payload }) => {
      state.likesCount++
      state.usersLike = [...state.usersLike, payload]
    },
    addCommentDevit: (state, { payload }) => {
      state.usersComments = payload
    }
  }
})

export const { addDevit, clearDevit, loadingDevit, errorDevit, addLikeDevit, addCommentDevit } = devitSlice.actions

export default devitSlice.reducer
