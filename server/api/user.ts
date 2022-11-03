import type { User } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getUser(email: string, password: string): Promise<User | null> {
  const User = await prisma.user.findUnique({
    where: { email },
  })
  if (User === null) return Promise.reject('ユーザーが存在しません。')
  if (User.password !== password) return Promise.reject('パスワードが違います。')
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
  try {
    const user = await getUser(email, password)
    if (user !== null) {
      return Promise.reject('すでにユーザーが存在します。')
    }
  } catch (err) {
    if (err !== null) {
      return Promise.reject(err)
    }
  }
  if (password.length < 8) {
    return Promise.reject('ユーザー名またはパスワードが不正です。')
  }
  return await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  })
}
