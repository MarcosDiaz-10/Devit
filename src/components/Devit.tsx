import { type DevitType, type ReturnsComponentFunction } from '@types'
import ImageLoaderComponent from './ImageLoader'
import styles from '@styles/homeStyles/devit/devitStyles.module.css'
import useTiemAgo from '@/hooks/useTimeAgo'

export default function Devit ({ devit }: { devit: DevitType }): ReturnsComponentFunction {
  const { avatar, username, content, createdAt } = devit

  const timeago = useTiemAgo(createdAt ?? 0)
  return (
        <article className={ styles.article }>
        <div className={styles.div}>
            <ImageLoaderComponent className='ImageUser' src={ avatar } alt={username} />
        </div>
        <div>
        <section>
          <header>
            <strong>{ username }.</strong>
            <span className={styles.span}>{timeago}</span>
          </header>
            <p className={ styles.p }>{content}</p>
        </section>
        </div>
      </article>
  )
}
