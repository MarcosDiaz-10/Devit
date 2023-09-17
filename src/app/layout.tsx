import type { ReturnsComponentFunction, PropsTypes } from '@types'
import '../styles/global.css'
import type { Metadata } from 'next'
import { baseFont } from './font'
import styles from '@styles/loginStyles/stylesLoginPage.module.css'
import { ProviderComponent } from '@/redux/provider'
import ValidationRouter from '@/components/ValidationRouter'

export const metadata: Metadata = {
  title: 'Devter',
  description: 'Twitter for developers'

}

export default function RootLayout ({ children }: PropsTypes): ReturnsComponentFunction {
  return (
    <html lang="es">
      <body className={baseFont.className}>
      <div className={styles.principalDiv}>
        <ProviderComponent>
          <ValidationRouter>
            <main className={styles.mains}>
              {children}
            </main>
          </ValidationRouter>
        </ProviderComponent>
      </div>
      </body>

    </html>
  )
}
