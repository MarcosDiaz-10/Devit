import { addDevit, clearDevit, loadingDevit, errorDevit, addLikeDevit, addCommentDevit } from '@/redux/features/devitSlice'
import { useAppDispatch, useAppSelector } from './typesStore'
import { type DevitType } from '@types'
import { addDevitFirebase, addLike, addComment } from '@/firebase/client'

export default function useDevitStore () {
  const { content, avatar, userId, username, status, img, id } = useAppSelector(state => state.devit)
  const dispatch = useAppDispatch()

  const onAddDevit = ({ userId, avatar, content, username, img, id }: DevitType): void => {
    dispatch(addDevit({ userId, avatar, content, username, img, id }))
  }

  const onClearDevit = () => {
    dispatch(clearDevit())
  }

  const onSaveDevit = async ({ content, avatar, userId, username, img }: DevitType) => {
    const { id } = await addDevitFirebase({ userId, avatar, content, username, img })

    return id
  }

  const onLoadingDevit = (boolean: boolean) => {
    dispatch(loadingDevit(boolean))
  }

  const onErrorDevit = () => {
    dispatch(errorDevit())
  }

  const onAddLikeDevit = async (id: string, likesCount: number, userId: string, usersLike: string[]) => {
    const likes = likesCount + 1

    const likedBy = [...usersLike, userId]

    await addLike(id, likes, likedBy)
    dispatch(addLikeDevit(userId))
  }

  const onAddCommentDevit = async (id: string, usersComments: DevitType[], devit: DevitType) => {
    await addComment(id, usersComments, devit)
    dispatch(addCommentDevit([...usersComments, devit]))
  }

  const devit = { avatar, userId, username, content, status }
  return {
    devit,
    avatar,
    userId,
    username,
    content,
    status,
    img,
    id,
    onAddDevit,
    onAddLikeDevit,
    onClearDevit,
    onSaveDevit,
    onLoadingDevit,
    onErrorDevit,
    onAddCommentDevit
  }
}
