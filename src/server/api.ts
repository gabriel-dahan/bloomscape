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
  UserItem,
  Item,
} from '@/shared/'

import { remultApi } from 'remult/remult-express'

import { SqlDatabase } from 'remult'
import { BetterSqlite3DataProvider } from 'remult/remult-better-sqlite3'
import Database from 'better-sqlite3'

import { UserController } from './controllers/UserController'
import { GameController } from './controllers/GameController'
import { AdminController } from './controllers/AdminController'
import { MarketController } from './controllers/MarketController'

import dotenv from 'dotenv'
import { ReportController } from './controllers/ReportController'
import { UserReport } from '@/shared/analytics/UserReport'
import { ModerationLog } from '@/shared/analytics/ModerationLog'
import { FlowerDiscovery } from '@/shared/analytics/FlowerDiscovery'
import { ChatController } from './controllers/ChatController'
import { Chat } from '@/shared/chat/Chat'
import { ChatMessage } from '@/shared/chat/ChatMessage'
import { ChatParticipant } from '@/shared/chat/ChatParticipant'

dotenv.config({
  path: './src/server/.env',
})

// DATABASE provider

const __DBProvider = new BetterSqlite3DataProvider(
  new Database(process.env.DB_PATH || './bloomscape.sqlite'),
)
export const db = new SqlDatabase(__DBProvider)

export const api = remultApi({
  dataProvider: db,
  entities: [
    UserReport,
    ModerationLog,
    FlowerDiscovery,

    User,
    Achievement,
    UserAchievement,

    FlowerSpecies,
    UserFlower,
    UserItem,

    MarketListing,
    MarketHistory,
    SapPurchase,
    MarketStats,
    Item,

    Friendship,
    ClaimLink,
    UserClaim,

    Tile,
    Island,

    Chat,
    ChatMessage,
    ChatParticipant,
  ],
  controllers: [
    AuthController,
    UserController,
    GameController,
    AdminController,
    MarketController,
    ReportController,
    ChatController,
  ],
  getUser: (req) => req.session!.user,
  admin: true, // UI Interface for admins
})
