import { UserFlower } from './flowers/UserFlower'
import type { FlowerAttributes, GlobalPlayerModifierType, GridModifierType } from './types'

export class AttributesLogic {
  static calculateStats(target: UserFlower, allFlowers: UserFlower[]) {
    const stats = {
      growthSpeedMultiplier: 1.0,
      xpMultiplier: 1.0,
      waterRetention: 1.0,
      qualityBonus: 0,
      scoreBonus: 0,
    }

    if (!target.species || !target.gridX || !target.gridY) return stats

    const targetAttr = target.species.attributes as FlowerAttributes

    const neighbors = this.getNeighbors(target, allFlowers, 1)

    if (targetAttr.synergies) {
      for (const synergy of targetAttr.synergies) {
        const matchCount = neighbors.filter(
          (n) => n.species?.slugName === synergy.targetSlug,
        ).length

        if (matchCount > 0) {
          const stacks = (synergy as any).stackable ? matchCount : 1

          this.applyModifiers(stats, synergy.modifiers, stacks)
        }
      }
    }

    for (const source of allFlowers) {
      if (source.id === target.id) continue
      if (!source.species?.attributes?.aura) continue
      if (!source.gridX || !source.gridY) continue

      const aura = source.species.attributes.aura
      const distance = this.getDistance(target, source)

      if (distance <= aura.range) {
        this.applyModifiers(stats, [{ stat: aura.effect.stat, value: aura.effect.value }], 1)
      }
    }

    if (targetAttr.environment?.nightBloomer) {
      // Night logic here
    }

    return stats
  }

  static getPlayerGlobalEffects(allFlowers: UserFlower[]) {
    const globalStats: Record<GlobalPlayerModifierType, number> = {
      GLOBAL_XP_MULTIPLIER: 1.0,
      SHOP_PRICE_DISCOUNT: 0,
      MARKET_SELLING_BONUS: 0,
      RARE_FIND_LUCK: 0,
    }

    for (const flower of allFlowers) {
      const attrs = flower.species?.attributes as FlowerAttributes
      if (!attrs?.playerEffects) continue

      for (const effect of attrs.playerEffects) {
        const isActive =
          effect.condition === 'WHILE_PLANTED' ||
          (effect.condition === 'WHILE_MATURE' && flower.status === 'MATURE')

        if (isActive) {
          if (effect.stat === 'GLOBAL_XP_MULTIPLIER') {
            globalStats[effect.stat] *= effect.value
          } else {
            globalStats[effect.stat] += effect.value
          }
        }
      }
    }

    return globalStats
  }

  private static getNeighbors(target: UserFlower, allFlowers: UserFlower[], range: number) {
    return allFlowers.filter(
      (f) =>
        f.id !== target.id &&
        f.gridX !== undefined &&
        f.gridY !== undefined &&
        Math.abs(f.gridX - target.gridX!) <= range &&
        Math.abs(f.gridY - target.gridY!) <= range,
    )
  }

  private static getDistance(a: UserFlower, b: UserFlower) {
    if (a.gridX === undefined || b.gridX === undefined) return 999
    return Math.max(Math.abs(a.gridX - b.gridX!), Math.abs(a.gridY! - b.gridY!))
  }

  private static applyModifiers(
    currentStats: any,
    modifiers: { stat: GridModifierType; value: number }[],
    stacks: number,
  ) {
    for (const mod of modifiers) {
      const totalValue = mod.value * stacks

      switch (mod.stat) {
        case 'GROWTH_SPEED':
          currentStats.growthSpeedMultiplier += totalValue
          break
        case 'XP_PERCENT':
          currentStats.xpMultiplier += totalValue
          break
        case 'WATER_RETENTION':
          currentStats.waterRetention += totalValue
          break
        case 'QUALITY_CHANCE':
          currentStats.qualityBonus += totalValue
          break
        case 'SCORE_FLAT':
          currentStats.scoreBonus += totalValue
          break
      }
    }
  }
}
