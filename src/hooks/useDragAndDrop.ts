import { useEffect, useState } from 'react'
import { DRAG_STATES } from '../helpers/Enums'
import { uploadImage, type FirebaseUploadTaskType, type FirebaseUploadTaskSnapshotType } from '@/firebase/client'
import { type ImageURLUploadStateType } from '@/helpers/types'

export default function useDragAndDrop () {
  const [drag, setDrag] = useState(DRAG_STATES.NONE)
  const [tasks, setTasks] = useState(Array<FirebaseUploadTaskType>)
  const [imgURL, setImgURL] = useState(Array<ImageURLUploadStateType>)

  useEffect(() => {
    if (tasks !== null) {
      tasks.forEach((task) => {
        setImgURL((imgs) => [...imgs, { refName: task.snapshot.ref.name, url: '', progress: 0 }])

        const onProgress = (snapshot: FirebaseUploadTaskSnapshotType) => {
          const { name } = snapshot.ref
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          const taskProgress = (imgs: ImageURLUploadStateType[]) => {
            return imgs.map((img) => {
              if (img.refName === name) {
                return {
                  ...img,
                  progress: Math.round(progress)
                }
              }
              return img
            })
          }
          setImgURL(taskProgress)
        }

        const onError = () => {}

        const onComplete = () => {
          const { name } = task.snapshot.ref

          const taskComplete = (imgs: ImageURLUploadStateType[], url: string) => {
            return imgs.map((img) => {
              if (img.refName === name) {
                return {
                  ...img,
                  progress: 100,
                  url
                }
              }
              return img
            })
          }

          task.snapshot.ref.getDownloadURL().then(url => {
            setImgURL(imgs => taskComplete(imgs, url))
          }).catch(console.error)
        }
        task.on('state_changed', onProgress, onError, onComplete)
      })
    }
  }, [tasks])

  const handleDragEnter = (event: React.DragEvent<HTMLTextAreaElement>) => {
    event.preventDefault()
    setDrag(DRAG_STATES.DRAG_OVER)
  }
  const handleDragLeave = (event: React.DragEvent<HTMLTextAreaElement>) => {
    event.preventDefault()
    setDrag(DRAG_STATES.NONE)
  }
  const handleDrag = (event: React.DragEvent<HTMLTextAreaElement>) => {
    event.preventDefault()
    setDrag(DRAG_STATES.NONE)

    const files = Array.from(event.dataTransfer.files)

    const tasks = uploadImage(files)

    setTasks(tasks)
  }

  const handleDeleteFile = (urlDelete: string, imgUrl: ImageURLUploadStateType[]) => {
    const newImgURL = imgUrl.filter(({ url }) => url !== urlDelete)
    setImgURL(newImgURL)
  }

  const handleCleanFiles = () => {
    setImgURL([])
  }

  const handleUploadFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setDrag(DRAG_STATES.NONE)

    if (event.target.files === null) return

    const files = Array.from(event.target.files)

    const tasks = uploadImage(files)

    setTasks(tasks)
  }

  return {
    drag,
    imgURL,
    handleDragEnter,
    handleDragLeave,
    handleDrag,
    handleDeleteFile,
    handleCleanFiles,
    handleUploadFiles
  }
}
