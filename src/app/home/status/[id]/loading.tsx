import ImageLoaderComponent from '@/components/ImageLoader'
import styles from '@styles/homeStyles/devit/loadingComposeDevit.module.css'

export default function LoadingComposeDevit () {
  return (
    <div className={ styles.loader}>
      <ImageLoaderComponent width={150} src='/spinner.gif' alt='Loading...'/>
    </div>
  )
}
