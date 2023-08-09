'use client'

import styles from '@styles/homeStyles/devit/composeDevitStyles.module.css'
import Buttons from '@/components/Buttons'
import { baseFont } from '@/app/font'
import { useState } from 'react'
import useUserStore from '@/hooks/useUserStore'
import useDevitStore from '@/hooks/useDevitStore'
import { type DevitType } from '@types'
import { useRouter } from 'next/navigation'

export default function ComposeDevit () {
  const { user } = useUserStore()
  const { onAddDevit, onSaveDevit, onLoadingDevit, onErrorDevit, status } = useDevitStore()

  const router = useRouter()

  const [message, setMessage] = useState('')

  const className = `${styles.textArea} ${baseFont.className}`

  const handleChange = (e: any) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    onLoadingDevit(true)

    const devit: DevitType = {
      avatar: user?.avatar ?? '',
      content: message,
      userId: user?.uid ?? '',
      username: user?.username ?? '',
      status: 'success'
    }

    onSaveDevit(devit).then((m) => {
      onAddDevit(devit)
      onLoadingDevit(false)
      router.push('/home')
    }).catch(error => {
      console.log(error)
      onErrorDevit()
    })
  }

  const isButtonDisabled = message.length === 0 || status === 'loading'
  return (
    <>
        <form onSubmit={handleSubmit}>
            <textarea
            value={message}
            onChange={handleChange}
            className={className}
            placeholder='Qué esta pasando?'></textarea>
            <div className={ styles.divButtonDevitear }>
                <Buttons classNameStyle={ styles.buttonDevitear} disabled={isButtonDisabled}> Devitear</Buttons>
            </div>
        </form>
    </>
  )
}
