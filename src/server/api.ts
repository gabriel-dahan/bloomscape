import { AuthController } from '@/server/controllers/AuthController'

import {
  Achievement,
  ClaimLink,
  FlowerSpecies,
  Friendship,
  Island,
  MarketHistory,
  MarketListing,
  MarketStats,
  SapPurchase,
  Tile,
  User,
  UserAchievement,
  UserClaim,
  UserFlower,
} from '@/shared/'

import { remultApi } from 'remult/remult-express'

import { SqlDatabase } from 'remult'
import { BetterSqlite3DataProvider } from 'remult/remult-better-sqlite3'
import Database from 'better-sqlite3'

import dotenv from 'dotenv'
import { UserController } from './controllers/UserController'
import { GameController } from './controllers/GameController'
dotenv.config({
  path: './src/server/.env',
})

// DATABASE provider

const __DBProvider = new BetterSqlite3DataProvider(
  new Database(process.env.DB_PATH || './bloomscape.sqlite'),
)
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

    Tile,
    Island,
  ],
  controllers: [AuthController, UserController, GameController],
  getUser: (req) => req.session!.user,
  admin: true, // UI Interface for admins
})
