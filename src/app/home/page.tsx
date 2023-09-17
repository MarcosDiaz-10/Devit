'use client'
import Devit from '@/components/Devit'
import { listenLatesDevits } from '@/firebase/client'
import useUserStore from '@/hooks/useUserStore'
import styles from '@styles/homeStyles/homeStyles.module.css'
import { useEffect } from 'react'

export default function HomeComponent () {
  const { timelineDevits: timeline, onSetTimelineDevits, user } = useUserStore()

  useEffect(() => {
    let unsubscribe: null | (() => void) = null
    if (user !== null) {
      unsubscribe = listenLatesDevits(onSetTimelineDevits)
    }

    return () => { (unsubscribe !== null) && unsubscribe() }
  }, [user])

  return (
      <section className={styles.section}>
        {
          timeline.map((devit) => {
            const { avatar, username, content, createAt, img, userId, id, likesCount, usersLike } = devit

            console.log({ devitPage: devit })
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
              key={id} />

            )
          })
        }
      </section>
  )
}
