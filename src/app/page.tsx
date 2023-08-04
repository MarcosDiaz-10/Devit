'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home (): null {
  const router = useRouter()

  useEffect(() => {
    router.replace('/login')
  }, [])

  return null
}
