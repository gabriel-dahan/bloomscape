import { AuthController } from '@/server/controllers/AuthController'

import {
  Achievement,
  ClaimLink,
  FlowerSpecies,
  Friendship,
  MarketHistory,
  MarketListing,
  MarketStats,
  SapPurchase,
  User,
  UserAchievement,
  UserClaim,
  UserFlower,
} from '@/shared/'

import { remultApi } from 'remult/remult-express'

import { SqlDatabase } from 'remult'
import { BetterSqlite3DataProvider } from 'remult/remult-better-sqlite3'
import Database from 'better-sqlite3'

// DATABASE provider

const __DBProvider = new BetterSqlite3DataProvider(new Database('./mydb.sqlite'))
const db = new SqlDatabase(__DBProvider)

export const api = remultApi({
  dataProvider: db,
  entities: [
    User,
    Achievement,
    UserAchievement,

    FlowerSpecies,
    UserFlower,

    MarketListing,
    MarketHistory,
    SapPurchase,
    MarketStats,

    Friendship,
    ClaimLink,
    UserClaim,
  ],
  controllers: [AuthController],
  getUser: (req) => req.session!.user,
  admin: true, // UI Interface for admins
})
