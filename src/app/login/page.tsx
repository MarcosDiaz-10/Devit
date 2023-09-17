import styles from '@styles/loginStyles/stylesLoginPage.module.css'

import DivLoginGithubButtons from '@/components/DivLoginGithubButton'

import { type ReturnsComponentFunction } from '@types'
import ImageComponentLogo from '@/components/icons/ImageComponentLogo'

export default function LoginPage (): ReturnsComponentFunction {
  return (

        <section className={ styles.section1 }>

          <ImageComponentLogo className={styles.logo}/>
          <h1 className={ styles.header1} >Devter</h1>
          <h2 className={ styles.header2}>Talk about development with develpers</h2>
          <DivLoginGithubButtons/>

        </section>

  )
}
