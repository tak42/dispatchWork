import type { User } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const get = async (email: string): Promise<User | null> => {
  return await prisma.user.findFirst({
    where: {
      email,
    },
  })
}
