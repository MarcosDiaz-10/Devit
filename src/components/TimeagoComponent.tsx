'use client'

import { type TimeagoPropsType } from '@types'
import useDevitStore from '@/hooks/useDevitStore'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const DATE_UNITS = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
]

const getDateDiffs = (timestamp: number) => {
  const now = Date.now()
  const elapsed = (timestamp - now) / 1000

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (typeof secondsInUnit === 'string' || typeof unit === 'number') {
      return
    }
    if (Math.abs(elapsed) > secondsInUnit || unit === 'seconds') {
      const value = Math.round(elapsed / secondsInUnit)
      return { value, unit }
    }
  }
}

const isDateTimeFormatSupported = typeof Intl !== 'undefined' && Intl.RelativeTimeFormat

export const formatDate = (value: number, unit: string) => {
  if (isDateTimeFormatSupported === false) {
    return `hace ${Math.abs(value)} ${unit}`
  }

  const rtf = new Intl.RelativeTimeFormat('es', {
    style: 'short'
  })
  const timeagoFormated = rtf.format(value, unit as Intl.RelativeTimeFormatUnit)

  return timeagoFormated
}

export default function TimeagoComponent ({ classNameTime, classNameLink, timestamp, avatar, username, content, createAt, img, id, userId }: TimeagoPropsType) {
  const { onAddDevit } = useDevitStore()
  const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp))

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDateDiffs(timestamp)
      setTimeago(newTimeAgo)
    }, 5000)

    return () => { clearInterval(interval) }
  }, [])

  const handleClick = () => {
    onAddDevit({ avatar, username, content, createAt, img, id, userId })
  }

  const { value, unit } = timeago ?? { value: 0, unit: 'second' }

  const timeagoFormated = formatDate(value, unit)

  return (
    <Link className={classNameLink} onClick={handleClick} href={`home/status/${id}`}>
      <time className={classNameTime}>{timeagoFormated}</time>
    </Link>
  )
}
