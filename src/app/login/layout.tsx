import type { ReturnsComponentFunction, PropsTypes } from '@types'

export default function LoginLayout ({ children }: PropsTypes): ReturnsComponentFunction {
  return (
        <>
            {children}
        </>
  )
}
