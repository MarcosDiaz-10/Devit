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

export default function useTiemAgo (timestamp: number) {
  const { value, unit } = getDateDiffs(timestamp) ?? { value: 0, unit: '' }

  const rtf = new Intl.RelativeTimeFormat('es', {
    style: 'short'
  })

  return rtf.format(value, unit)
}
