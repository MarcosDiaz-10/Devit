import { type ImageViewerPropsType } from '@types'
import ImageDisplay from './ImageDisplay'
import styles from '@styles/homeStyles/devit/composeDevitStyles.module.css'

export default function ImageViewer ({ imgURL, handleDeleteFile, uploadingImage = false }: ImageViewerPropsType) {
  return (
    <>
         {
          imgURL.length !== 0 && <section className={ (imgURL.length > 1) ? styles.sectionImages : styles.sectionOneImage }>
            {
              imgURL.map(({ url, progress, refName }) => {
                return <ImageDisplay key={ refName } progress={ progress} imgURL={url} handleDeleteFile={ (handleDeleteFile !== undefined) ? () => { handleDeleteFile(url, imgURL) } : undefined } uploadingImage={uploadingImage}/>
              })
            }
          </section>
         }
    </>
  )
}
