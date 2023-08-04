'use client'
import { OnAuthStateChanged } from '@/firebase/client'
import useUserStore from '@/hooks/useUserStore'
import type { PropsTypes } from '@types'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ValidationRouter ({ children }: PropsTypes) {
  const router = useRouter()
  const { isLoged, isFirstCharged, onLoadingUser, onSetUser } = useUserStore()

  useEffect(() => {
    onLoadingUser(true)
    OnAuthStateChanged(onSetUser)
    onLoadingUser(false)
  }, [])

  useEffect(() => {
    if (!isLoged && !isFirstCharged) router.replace('/login')
  }, [isLoged])

  return (
    <>
        {children}
    </>
  )
}
