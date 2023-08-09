import type { ReturnsComponentFunction, PropsTypes } from '@types'

export default function Buttons ({ children, onClick, classNameStyle, disabled = false }: PropsTypes): ReturnsComponentFunction {
  return (
        <button className={classNameStyle} disabled={disabled} onClick={onClick}>
            {children}
        </button>
  )
}
