import { type DevitType, type ParamsType } from '@types'
import style from '@styles/homeStyles/devit/devitStyles.module.css'
import Devit from '@/components/Devit'

const fetchUrl = process.env.URL_FETCH ?? 'http://localhost:3000/api/devits'

const fetchDevit = (id: string): Promise<DevitType | null > => {
  return fetch(fetchUrl + `/${id}`, { cache: 'no-store' })
    .then((res) => {
      if (!res.ok) return null
      return res.json()
    }
    )
    .catch((err) => {
      console.error(err)
    })
}
export default async function StatusDevit ({ params }: ParamsType) {
  const devit = await fetchDevit(params?.id ?? '')

  if (devit === null) return <h1 className={ style.positionDevit } style={{ justifyContent: 'center' }}>Devit not found</h1>

  const { usersComments } = devit

  if (usersComments === undefined) return

  return (
    <>
      {
        usersComments.map((devit) => {
          const { avatar, username, content, createAt, img, userId, id, likesCount, usersLike, usersComments: usersCommentsByComment } = devit

          return (
            <Devit
            avatar={ avatar}
            username={username}
            content={content}
            createAt={createAt}
            img={img}
            userId={userId}
            id={id}
            likesCount={likesCount}
            usersLike={usersLike}
            commentsCount={ usersCommentsByComment?.length}
            key={id} />

          )
        })

      }
    </>
  )
}
