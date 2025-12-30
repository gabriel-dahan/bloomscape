export const XP_BASE = 500
export const XP_EXPONENT = 1.5

export function getRequiredXpForLevel(level: number): number {
  if (level <= 1) return 0
  return Math.floor(XP_BASE * Math.pow(level - 1, XP_EXPONENT))
}

export function getLevelFromXp(totalXp: number): number {
  let level = 1
  while (getRequiredXpForLevel(level + 1) <= totalXp) {
    level++
  }
  return level
}

export function getLevelProgress(totalXp: number) {
  const currentLevel = getLevelFromXp(totalXp)
  const xpForCurrentLevel = getRequiredXpForLevel(currentLevel)
  const xpForNextLevel = getRequiredXpForLevel(currentLevel + 1)

  const current = totalXp - xpForCurrentLevel
  const max = xpForNextLevel - xpForCurrentLevel

  const percent = max === 0 ? 100 : Math.floor((current / max) * 100)

  return {
    level: currentLevel,
    current,
    max,
    percent,
  }
}
