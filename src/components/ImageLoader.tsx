'use client'

import Image from 'next/image'

import type { ReturnsComponentFunction, ImageComponentPropsType, ImagePropsType } from '@types'

const imageLoader = ({ src }: ImagePropsType): string => {
  if (src === undefined) {
    return ''
  }

  return `${src}`
}

export default function ImageLoaderComponent ({ src, alt, width = 100, height = 100, className, text, withText = false, onClick }: ImageComponentPropsType): ReturnsComponentFunction | null {
  if (alt === undefined || src === undefined) {
    return null
  }

  const onClickEmpty = () => {}

  return (
    <div>
      <Image loader={ imageLoader } onClick={ onClick ?? onClickEmpty} width={width} height={height} src={src} alt={alt} className={className} title={alt}/>
      { withText && <strong>{text ?? alt }</strong>}
    </div>

  )
}
