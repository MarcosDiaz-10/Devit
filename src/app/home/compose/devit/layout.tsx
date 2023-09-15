import { type PropsTypes } from '@types'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crear un Devit / Devter',
  description: 'Pagina en la que los usuarios pueden crear un devit'
}

export default function LayoutComposeDevit ({ children }: PropsTypes) {
  return (
        <>
        {
            children
        }
        </>
  )
}
