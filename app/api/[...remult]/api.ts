import { createPostgresDataProvider } from 'remult/postgres'
import { remultApi } from 'remult/remult-next'
import { Achievement, ClaimLink, FlowerSpecies, Friendship, MarketHistory, MarketListing, MarketStats, SapPurchase, User, UserAchievement, UserClaim, UserFlower } from '../../../shared'
import { AuthController } from '@/lib/controllers/AuthController'

export const api = remultApi({
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
        UserClaim
    ],
    
    controllers: [
        AuthController

    ],

    dataProvider: createPostgresDataProvider({
        connectionString: process.env.DATABASE_URL ?? 'postgres://bloom_postgres:bloom_password@db:5432/bloomscape_db'
    })
})