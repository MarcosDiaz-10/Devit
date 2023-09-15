import type { UserStateType, DevitType } from '@types'
import { setIsLoading, setUser, setTimelineDevits } from '@reduxFeatures/userSlice'
import { useAppSelector, useAppDispatch } from './typesStore'
import { useMemo } from 'react'

export default function useUserStore () {
  const { uid, username, email, avatar, isLoading, isLoged, timelineDevits } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  const onSetUser = ({ username, email, avatar, uid }: UserStateType): void => {
    dispatch(setUser({ username, email, avatar, uid }))
  }

  const onLoadingUser = (isLoading: boolean): void => {
    dispatch(setIsLoading(isLoading))
  }

  const onSetTimelineDevits = (timelineDevits: DevitType[]) => {
    dispatch(setTimelineDevits(timelineDevits))
  }

  const user = useMemo(() => {
    if (uid === null) {
      return null
    }

    return { username, email, avatar, uid }
  }, [uid])
  // const user = (uid === null) ? null : { username, email, avatar, uid }
  return {
    uid,
    user,
    username,
    email,
    avatar,
    isLoading,
    isLoged,
    timelineDevits,
    onSetUser,
    onLoadingUser,
    onSetTimelineDevits
  }
}
