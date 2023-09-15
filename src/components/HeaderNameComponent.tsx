'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function HeaderNameComponent ({ styles }: { styles: string }) {
  const [name, setName] = useState('...')
  const pathName = usePathname()

  useEffect(() => {
    switch (pathName) {
      case '/home':
        setName('Inicio')
        break
      case '/home/compose/devit':
        setName('Compose Devit')
        break

      default:
        setName('Devit')
        break
    }
  }, [pathName])

  return (
    <h2 className={ styles }>{name}</h2>
  )
}
