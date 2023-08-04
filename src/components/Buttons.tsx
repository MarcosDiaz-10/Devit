import type { ReturnsComponentFunction, PropsTypes } from '@types'

export default function Buttons ({ children, onClick, classNameStyle }: PropsTypes): ReturnsComponentFunction {
  return (
        <button className={classNameStyle} onClick={onClick}>
            {children}
        </button>
  )
}
