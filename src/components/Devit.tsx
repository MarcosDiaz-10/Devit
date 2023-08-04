import { type ReturnsComponentFunction, type Timeline } from '@types'
import ImageLoaderComponent from './ImageLoader'
import styles from '@styles/homeStyles/devit/devitStyles.module.css'

export default function Devit ({ devit }: { devit: Timeline }): ReturnsComponentFunction {
  const { avatar, username, message } = devit

  return (
        <article className={ styles.article }>
        <div className={styles.div}>
            <ImageLoaderComponent className='ImageUser' src={ avatar } alt={username} />
        </div>
        <div>
        <section>
            <strong>{ username }</strong>
            <p className={ styles.p }>{message}</p>
        </section>
        </div>
      </article>
  )
}
