import type { User } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getUser(email: string): Promise<User | null> {
  return await prisma.user.findUnique({
    where: { email },
  })
}

export async function getAllUsers(): Promise<User[]> {
  return await prisma.user.findMany()
}

export async function createUser({ name, email }: { name: string; email: string }): Promise<User> {
  return await prisma.user.create({
    data: {
      name,
      email,
    },
  })
}
