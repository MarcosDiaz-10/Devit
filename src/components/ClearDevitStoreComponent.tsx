'use client'

import useDevitStore from '@/hooks/useDevitStore'
import { type PropsTypes } from '@types'
import { useEffect } from 'react'

export default function ClearDevitStoreComponent ({ children }: PropsTypes) {
  const { onClearDevit } = useDevitStore()

  useEffect(() => {
    onClearDevit()
  }, [])

  return (
    <>
     {children}
    </>
  )
}
