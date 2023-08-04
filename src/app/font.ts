import { type fonts } from '@types'
import { Roboto } from 'next/font/google'

const fontRoboto = Roboto({
  subsets: ['latin-ext'],
  weight: ['400', '500']
})

export const fontsApp: fonts = {
  baseFont: fontRoboto
}

export const { baseFont } = fontsApp
