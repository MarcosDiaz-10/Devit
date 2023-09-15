'use client'
import { type DevitType, type ReturnsComponentFunction } from '@types'
import ImageLoaderComponent from './ImageLoader'
import styles from '@styles/homeStyles/devit/devitStyles.module.css'
import TimeagoComponent from './TimeagoComponent'
import { useRouter } from 'next/navigation'
import ImageViewer from './ImageViewer'
import Like from './icons/Like'
import Comments from './icons/Commets'
import useDevitStore from '@/hooks/useDevitStore'
import useUserStore from '@/hooks/useUserStore'
import { useMemo } from 'react'

export default function Devit ({ avatar, username, content, createAt, img, userId, id, likesCount, usersLike, commentsCount = 0 }: DevitType): ReturnsComponentFunction {
  const { onAddLikeDevit } = useDevitStore()
  const { uid } = useUserStore()

  const router = useRouter()
  const handleClickSection = (e: any) => {
    e.preventDefault()
    router.push(`home/status/${id}`)
  }

  const userLiked = useMemo(() => {
    if (usersLike === undefined) return false
    return usersLike.includes(uid ?? '')
  }, [uid, usersLike])

  const handleClickLike = (e: any) => {
    e.preventDefault()
    if (usersLike === undefined) return
    if (userLiked) return

    onAddLikeDevit(id, likesCount ?? 0, uid ?? '', usersLike).catch((err) => { console.log(err) })
  }

  return (
        <article className={ styles.article }>
          <div className={styles.div}>
              <ImageLoaderComponent className='ImageUser' src={ avatar } alt={username} />
          </div>
          <div className={styles.sectionDevit}>
            <section onClick={ handleClickSection }>
                <header>
                  <strong>{ username }.</strong>
                  <TimeagoComponent
                  avatar={ avatar }
                  username={ username }
                  content={ content }
                  createAt={ createAt }
                  userId={userId}
                  img={img}
                  id={ id }
                  classNameTime={styles.span} classNameLink={ styles.link}
                  timestamp={createAt ?? 0}/>
                </header>
                  <p className={ styles.p }>{content}</p>
                  {img.length !== 0 && <ImageViewer imgURL={img} />}
            </section>
            <section className={ styles.sectionOptions }>
              <div onClick={handleClickLike}>
                <Like className={ userLiked ? styles.likedDevit : ''} stroke='#6d6d6daa' width={32} height={32}/>
              </div>
              <section>{likesCount}</section>
              <div>
                <Comments stroke='#6d6d6daa' width={32} height={32}/>
              </div>
              <section>{commentsCount}</section>
            </section>
          </div>
      </article>
  )
}
