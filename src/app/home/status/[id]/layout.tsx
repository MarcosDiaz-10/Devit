import Devit from '@/components/Devit'
import { type DevitType, type PropsTypes } from '@types'
import style from '@styles/homeStyles/devit/devitStyles.module.css'
import TextAreaForm from '@/components/TextAreaForm'
import ImageLoaderComponent from '@/components/ImageLoader'

const fetchDevit = (id: string): Promise<DevitType | null > => {
  return fetch(`http://localhost:3000/api/devits/${id}`, { cache: 'no-store' })
    .then((res) => {
      if (!res.ok) return null
      return res.json()
    }
    )
    .catch((err) => {
      console.error(err)
    })
}

export default async function LayoutDevit ({ children, params }: PropsTypes) {
  const devit = await fetchDevit(params?.id ?? '')

  if (devit === null) return <h1 className={ style.positionDevit } style={{ justifyContent: 'center' }}>Devit not found</h1>

  const { avatar, username, content, createAt, img, userId, id, likesCount, usersComments } = devit

  return (
    <>
      <div className={ style.positionDevit}>
        <Devit
                  avatar={ avatar}
                  username={username}
                  content={content}
                  createAt={createAt}
                  img={img}
                  userId={userId}
                  likesCount={likesCount}
                  commentsCount={ usersComments?.length}
                  id={id}
          />
      <div className={ style.divTextAreaComment}>
          <div className={style.imageComment}>
              <ImageLoaderComponent className='ImageUser' src={ avatar } alt={username} />
          </div>
         <TextAreaForm idDevit={id} classNameComment={ style.textAreaComment } userComments={ usersComments}/>
      </div>
      {children}
      </div>
    </>

  )
}
