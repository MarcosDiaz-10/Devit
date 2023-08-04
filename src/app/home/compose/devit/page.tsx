'use client'

import styles from '@styles/homeStyles/devit/composeDevitStyles.module.css'
import Buttons from '@/components/Buttons'
import { baseFont } from '@/app/font'
// import useUserStore from '@/hooks/useUserStore'

export default async function ComposeDevit () {
//   const { user } = useUserStore()

  const className = `${styles.textArea} ${baseFont.className}`

  return (
    <>
        <form>
            <textarea className={className} placeholder='Qué esta pasando?'></textarea>
            <div className={ styles.divButtonDevitear }>
                <Buttons classNameStyle={ styles.buttonDevitear}> Devitear</Buttons>
            </div>
        </form>
    </>
  )
}
