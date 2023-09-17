'use client'

import styles from '@styles/homeStyles/devit/composeDevitStyles.module.css'
import { useEffect } from 'react'
import useUserStore from '@/hooks/useUserStore'
import useDevitStore from '@/hooks/useDevitStore'

import useDragAndDrop from '@/hooks/useDragAndDrop'

import ImageLoaderComponent from '@/components/ImageLoader'

import TextAreaForm from '@/components/TextAreaForm'

export default function ComposeDevit () {
  const { user } = useUserStore()
  const { onClearDevit } = useDevitStore()
  const { handleCleanFiles } = useDragAndDrop()

  useEffect(() => {
    onClearDevit()
    handleCleanFiles()
  }, [])

  return (
    <>

        <section className={styles.sectionForm}>
          <section className={ styles.sectionAvatar}>
            {
              user !== null && <ImageLoaderComponent className='ImageUser' src={ user.avatar ?? '' } alt='ImageUser'/>
            }
          </section>
          <TextAreaForm />
        </section>

    </>
  )
}
