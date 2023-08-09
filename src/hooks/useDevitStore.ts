import { addDevit, clearDevit, loadingDevit, errorDevit } from '@/redux/features/devitSlice'
import { useAppDispatch, useAppSelector } from './typesStore'
import { type Devit } from '@types'
import { addDevitFirebase } from '@/firebase/client'

export default function useDevitStore () {
  const { content, avatar, userId, username, status } = useAppSelector(state => state.devit)
  const dispatch = useAppDispatch()

  const onAddDevit = ({ userId, avatar, content, username }: Devit): void => {
    dispatch(addDevit({ userId, avatar, content, username }))
  }

  const onClearDevit = () => {
    dispatch(clearDevit())
  }

  const onSaveDevit = async ({ content, avatar, userId, username }: Devit) => {
    await addDevitFirebase({ userId, avatar, content, username })
  }

  const onLoadingDevit = (boolean: boolean) => {
    dispatch(loadingDevit(boolean))
  }

  const onErrorDevit = () => {
    dispatch(errorDevit())
  }

  const devit = { avatar, userId, username, content, status }
  return {
    devit,
    avatar,
    userId,
    username,
    content,
    status,
    onAddDevit,
    onClearDevit,
    onSaveDevit,
    onLoadingDevit,
    onErrorDevit
  }
}
