import Devit from '@/components/Devit'
import { type timelineTypeReturnFecth } from '@/helpers/types'
import styles from '@styles/homeStyles/homeStyles.module.css'

const fetchGet = (url: string): Promise<timelineTypeReturnFecth> => {
  return fetch(url, { next: { revalidate: 10 } }).then(res => res.json())
}

export default async function HomeComponent () {
  const { timeline } = await fetchGet('http://localhost:3000/api/statuses/home_timeline')

  return (
    <section className={ styles.section }>
      {
     timeline.map(devit => {
       return (
        <Devit devit={devit} key={devit.id}/>

       )
     })
      }
    </section>
  )
}
