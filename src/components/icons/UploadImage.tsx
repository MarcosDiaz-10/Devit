import { type PropsTypes } from '@types'

export default function UploadImage (props: PropsTypes['propsForSvg']) {
  return (
    <svg viewBox="0 0 21 21" width={21} height={21} {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m14.5 7.5-3.978-4-4.022 4M10.522 3.521V15.5M3.5 12v4.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V12" />
    </g>
  </svg>
  )
}
