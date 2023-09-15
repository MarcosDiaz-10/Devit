import type { ReturnsComponentFunction, PropsTypes } from '@types'

import styles from '@styles/homeStyles/homeStyles.module.css'
import Link from 'next/link'
import Create from '@/components/icons/Create'
import Home from '@/components/icons/Home'
import Search from '@/components/icons/Search'

import type { Metadata } from 'next'
import HeaderNameComponent from '@/components/HeaderNameComponent'

export const metadata: Metadata = {
  title: 'Inicio / Devter',
  description: 'Inicio de Devter, Se muestra el timeline de los nuevos devits que crean los usuarios'

}

export default function HomePageLayout ({ children }: PropsTypes): ReturnsComponentFunction {
  return (

    <>
        <header className={ styles.header }>
          <HeaderNameComponent styles={ styles.h2 }/>
        </header>

        {children}

        <nav className={ styles.nav }>
          <div>
            <Link href="/home">
              <Home stroke='#09f' width={32} height={32}/>
            </Link>
          </div>
          <div>
            <Link href="/search">
              <Search stroke='#09f' width={32} height={32}/>
            </Link>
          </div>
          <div>
            <Link href="/home/compose/devit">
              <Create stroke='#09f' width={32} height={32}/>
            </Link>
          </div>
        </nav>
    </>

  )
}
