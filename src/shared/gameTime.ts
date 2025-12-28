export const GAME_SPEED = 12

export const GAME_EPOCH = new Date('2024-01-01T00:00:00Z').getTime()

export type Season = 'Spring' | 'Summer' | 'Autumn' | 'Winter'

export interface GameTime {
  totalGameSeconds: number
  fullDate: Date
  year: number
  month: number
  monthName: string
  dayOfMonth: number
  dayOfWeek: string
  season: Season
  formatted: string
  hour: number
  minute: number
  progress: number
  isDay: boolean
  isNight: boolean
  speed: number
}

export function calculateGameTime(): GameTime {
  const now = Date.now()
  const realElapsed = now - GAME_EPOCH
  const gameElapsed = realElapsed * GAME_SPEED

  const currentGameDate = new Date(GAME_EPOCH + gameElapsed)

  const year = currentGameDate.getUTCFullYear()
  const month = currentGameDate.getUTCMonth()
  const dayOfMonth = currentGameDate.getUTCDate()
  const dayOfWeekIndex = currentGameDate.getUTCDay()
  const hour = currentGameDate.getUTCHours()
  const minute = currentGameDate.getUTCMinutes()
  const second = currentGameDate.getUTCSeconds()

  const totalSecondsInDay = hour * 3600 + minute * 60 + second
  const progress = totalSecondsInDay / 86400

  const isDay = hour >= 6 && hour < 20
  const isNight = !isDay

  const season = getSeason(month, dayOfMonth)
  const monthName = getMonthName(month)
  const dayOfWeek = getDayName(dayOfWeekIndex)

  const formatted = `${dayOfWeek}, ${monthName} ${dayOfMonth}, ${year} (${season})`

  return {
    totalGameSeconds: Math.floor(gameElapsed / 1000),
    fullDate: currentGameDate,
    year,
    month: month + 1,
    monthName,
    dayOfMonth,
    dayOfWeek,
    season,
    formatted,
    hour,
    minute,
    progress,
    isDay,
    isNight,
    speed: GAME_SPEED,
  }
}

function getSeason(monthIndex: number, dayOfMonth: number): Season {
  const dateValue = monthIndex * 100 + dayOfMonth

  if (dateValue >= 1121 || dateValue < 220) return 'Winter'
  if (dateValue >= 822) return 'Autumn'
  if (dateValue >= 521) return 'Summer'
  return 'Spring'
}

function getMonthName(monthIndex: number): string {
  const date = new Date()
  date.setUTCMonth(monthIndex)
  return date.toLocaleString('default', { month: 'long', timeZone: 'UTC' })
}

function getDayName(dayIndex: number): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return days[dayIndex]
}

export function realSecondsToGameDays(realSeconds: number): number {
  const gameSeconds = realSeconds * GAME_SPEED
  return Math.floor(gameSeconds / 86400)
}
