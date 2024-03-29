import { type PropsTypes } from '@types'

export default function Comments (props: PropsTypes['propsForSvg']) {
  return (
    <svg viewBox="0 0 21 21" width={21} height={21} {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13.418 4.214A9.283 9.283 0 0 0 10.5 3.75c-4.418 0-8 3.026-8 6.759 0 1.457.546 2.807 1.475 3.91L3 19l3.916-2.447a9.181 9.181 0 0 0 3.584.714c4.418 0 8-3.026 8-6.758 0-.685-.12-1.346-.345-1.969M16.5 3.5v4M18.5 5.5h-4" />
      </g>
    </svg>
  )
}
