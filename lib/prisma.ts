import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient() {
  // Prisma v7 requires either adapter or accelerateUrl
  // Use PRISMA_DATABASE_URL (Accelerate) if available, otherwise DATABASE_URL
  const config: any = {
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  }

  if (process.env.PRISMA_DATABASE_URL) {
    // Use Accelerate for pooled connections
    config.accelerateUrl = process.env.PRISMA_DATABASE_URL
  } else if (process.env.DATABASE_URL) {
    // Fallback to direct connection (shouldn't happen, but just in case)
    // For Prisma v7, we still need to provide the URL via environment variable
    // The client will read DATABASE_URL automatically
  }

  return new PrismaClient(config)
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

