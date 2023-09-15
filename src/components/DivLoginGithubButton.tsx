'use client'
import Buttons from './Buttons'
import GitHub from './icons/Github'

import { loginWithGithub } from '@/firebase/client'

import styles from '@styles/loginStyles/stylesLoginPage.module.css'
import useUserStore from '@/hooks/useUserStore'
import ImageLoaderComponent from './ImageLoader'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function DivLoginGithubButtons () {
  const { user, isLoading, isLoged, onLoadingUser } = useUserStore()

  useEffect(() => {
    if (isLoged) redirect('/home')
  }, [isLoged])

  const handleClick = async (): Promise<void> => {
    onLoadingUser(true)

    try {
      await loginWithGithub()
      onLoadingUser(false)

      redirect('/home')
    } catch (error) {
      onLoadingUser(false)
      console.log(error)
    }
  }

  return (
        <div className={ styles.divButton }>

          {

            user === null && !isLoading
              ? (
                  <Buttons classNameStyle={ styles.buttonGithub } onClick={ handleClick }>
                    <GitHub fill='#fff' width={32} height={24}/>
                    Login with GitHub
                  </Buttons>
                )
              : null
          }
          {
            isLoading && <ImageLoaderComponent width={150} src='/spinner.gif' alt='Loading...'/>
          }

      </div>
  )
}
