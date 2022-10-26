import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const user = await prisma.user.create({
    data: {
      name: 'noto-takaaki',
      email: '1206ookubo@gmail.com',
      isAdmin: true,
    },
  })
  console.log(user)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
