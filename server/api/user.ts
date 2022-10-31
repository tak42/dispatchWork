import type { User } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getUser(email: string, password: string): Promise<User | null> {
  const User = await prisma.user.findUnique({
    where: { email },
  })
  if (User === null) return Promise.reject(null)
  if (User.password !== password) return Promise.reject(null)
  return Promise.resolve(User)
}

export async function getAllUsers(): Promise<User[]> {
  return await prisma.user.findMany()
}

export async function createUser({
  name,
  email,
  password,
}: {
  name: string
  email: string
  password: string
}): Promise<User> {
  return await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  })
}
