import { type UserStateType } from '@/helpers/types'
import { setIsLoading, setUser } from '@reduxFeatures/userSlice'
import { useAppSelector, useAppDispatch } from './typesStore'

export default function useUserStore () {
  const { username, email, avatar, isLoading, isLoged, isFirstCharged } = useAppSelector(state => state.user)
  // Todo Terminar el hook
  const dispatch = useAppDispatch()

  const onSetUser = ({ username, email, avatar }: UserStateType): void => {
    dispatch(setUser({ username, email, avatar }))
  }

  const onLoadingUser = (isLoading: boolean): void => {
    dispatch(setIsLoading(isLoading))
  }

  const user = (email === null) ? null : { username, email, avatar }

  return {
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
