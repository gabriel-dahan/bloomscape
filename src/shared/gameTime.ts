export const GAME_SPEED = 10000

export const GAME_CYCLE_DURATION = (24 * 60 * 60 * 1000) / GAME_SPEED

export const GAME_EPOCH = new Date('2024-01-01T00:00:00Z').getTime()

export interface GameTime {
  progress: number
  hour: number
  minute: number
  isDay: boolean
  isNight: boolean
  speed: number
}

export function calculateGameTime(): GameTime {
  const now = Date.now()
  const elapsed = now - GAME_EPOCH
  const progress = (elapsed % GAME_CYCLE_DURATION) / GAME_CYCLE_DURATION

  const totalMinutes = progress * 24 * 60
  const hour = Math.floor(totalMinutes / 60)
  const minute = Math.floor(totalMinutes % 60)

  const isDay = hour >= 6 && hour < 20
  const isNight = !isDay

  return {
    progress,
    hour,
    minute,
    isDay,
    isNight,
    speed: GAME_SPEED,
  }
}
