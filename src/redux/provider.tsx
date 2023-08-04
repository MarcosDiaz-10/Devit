'use client'

import { Provider } from 'react-redux'
import { store } from './store'
import type { ReturnsComponentFunction, PropsTypes } from '@/helpers/types'

export function ProviderComponent ({ children }: PropsTypes): ReturnsComponentFunction {
  return (
      <Provider store={ store }>
        {children}
      </Provider>
  )
}
