import { type UserStateType } from '@/helpers/types'
import { setIsLoading, setUser } from '@reduxFeatures/userSlice'
import { useAppSelector, useAppDispatch } from './typesStore'

export default function useUserStore () {
  const { uid, username, email, avatar, isLoading, isLoged, isFirstCharged } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  const onSetUser = ({ username, email, avatar, uid }: UserStateType): void => {
    dispatch(setUser({ username, email, avatar, uid }))
  }

  const onLoadingUser = (isLoading: boolean): void => {
    dispatch(setIsLoading(isLoading))
  }

  const user = (uid === null) ? null : { username, email, avatar, uid }

  return {
    uid,
    user,
    username,
    email,
    avatar,
    isLoading,
    isLoged,
    isFirstCharged,
    onSetUser,
    onLoadingUser
  }
}
