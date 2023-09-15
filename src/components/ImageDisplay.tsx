import { type ImageDisplayPropsType } from '@types'
import ImageLoaderComponent from './ImageLoader'
import styles from '@styles/homeStyles/devit/composeDevitStyles.module.css'

export default function ImageDisplay ({ imgURL, uploadingImage = false, progress, handleDeleteFile }: ImageDisplayPropsType) {
  const handleClick = () => {
    window.open(imgURL, '_blank')
  }

  if (progress === 0) return null
  if (imgURL === '' && progress === 100) return null

  return (

    <section className={styles.sectionRemoveImage}>
        {
          (uploadingImage && progress === 100) ? <button className={ styles.buttonDeleteFile} onClick={ handleDeleteFile }>x</button> : null
        }
        { (progress < 100)
          ? <div className={ styles.divProgress}>{progress}%</div>
          : <div>
              <ImageLoaderComponent onClick={ handleClick} className={ styles.img} src={ imgURL } alt='UploadImage'/>
            </div>
        }
    </section>
  )
}
