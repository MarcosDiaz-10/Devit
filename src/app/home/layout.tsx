import type { ReturnsComponentFunction, PropsTypes } from '@types'

import styles from '@styles/homeStyles/homeStyles.module.css'

export default function HomePageLayout ({ children }: PropsTypes): ReturnsComponentFunction {
  return (

    <div>
        <header className={ styles.header }>
          <h2 className={ styles.h2 }>Inicio</h2>
        </header>

        {children}

        <nav className={ styles.nav }>

        </nav>
    </div>

  )
}
