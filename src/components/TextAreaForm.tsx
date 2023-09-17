'use client'

import { baseFont } from '@/app/font'
import useDragAndDrop from '@/hooks/useDragAndDrop'
import styles from '@styles/homeStyles/devit/composeDevitStyles.module.css'
import { DRAG_STATES } from '@/helpers/Enums'
import useUserStore from '@/hooks/useUserStore'
import useDevitStore from '@/hooks/useDevitStore'
import Buttons from './Buttons'
import UploadImage from './icons/UploadImage'
import ImageViewer from './ImageViewer'
import { useRouter } from 'next/navigation'
import { type DevitType } from '@/helpers/types'
import { useState } from 'react'

export default function TextAreaForm ({ idDevit, classNameComment, userComments }: { classNameComment?: string, userComments?: DevitType[], idDevit?: string }) {
  const { status } = useDevitStore()
  const { user } = useUserStore()

  const { drag, imgURL, handleDrag, handleDragEnter, handleDragLeave, handleDeleteFile, handleUploadFiles } = useDragAndDrop()

  const { onAddDevit, onSaveDevit, onLoadingDevit, onErrorDevit, onAddCommentDevit } = useDevitStore()

  const router = useRouter()

  const className = `${(classNameComment === undefined) ? styles.textArea : `${styles.textArea} ${classNameComment}`} ${baseFont.className} ${drag === DRAG_STATES.DRAG_OVER ? styles.onDrag : ''}`

  const [message, setMessage] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    onLoadingDevit(true)

    const devit: DevitType = {
      id: '',
      avatar: user?.avatar ?? '',
      content: message,
      userId: user?.uid ?? '',
      username: user?.username ?? '',
      status: 'success',
      img: imgURL

    }
    if (userComments !== undefined) {
      onAddCommentDevit(idDevit ?? '', userComments, devit).then(() => {
        onLoadingDevit(false)
        setMessage('')
        router.refresh()
      }).catch((err) => { console.log(err) })

      return
    }

    onSaveDevit(devit).then((id) => {
      onAddDevit({ ...devit, id })
      onLoadingDevit(false)
      router.push('/home')
    }).catch(error => {
      console.log(error)
      onErrorDevit()
    })
  }

  const handleChange = (e: any) => {
    setMessage(e.target.value)
  }

  const isButtonDisabled = message.length === 0 || status === 'loading'
  return (
      <>
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrag}
            value={message}
            onChange={handleChange}
            className={className}
            placeholder='Qué esta pasando?'>
            </textarea>
            <ImageViewer imgURL={ imgURL } handleDeleteFile={ handleDeleteFile} uploadingImage={true}/>
            <div className={ styles.divButtonDevitear }>
                <label className={styles.labelFiles}>
                <UploadImage stroke='#09f' width={32} height={32}/>
                <input style={{ display: 'none' }} type="file" name="img" id="img" onChange={handleUploadFiles} multiple/>
                </label>
                <Buttons classNameStyle={ styles.buttonDevitear} disabled={isButtonDisabled}> Devitear</Buttons>
            </div>
        </form>
    </>

  )
}
