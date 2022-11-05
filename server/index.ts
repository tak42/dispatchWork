import Fastify from 'fastify'
import cors from '@fastify/cors'
import { getUser, getAllUsers, createUser } from './api/user'

const fastify = Fastify()

fastify.register(cors, {
  // put your options here
})

fastify.get('/user', async (request, reply) => {
  const users = await getAllUsers()
  reply.type('application/json').code(200).send({ response: users })
})

fastify.post<{ Body: { email: string; password: string } }>('/user_get', async (request, reply) => {
  const mail = String(request.body.email)
  const password = String(request.body.password)
  try {
    const user = await getUser(mail, password)
    if (user === null) {
      return Promise.reject('ユーザーが見つかりません。')
    }
    reply
      .type('application/json')
      .code(200)
      .send({ response: { user: user.name, email: mail } })
  } catch (err) {
    return Promise.reject(err)
  }
})

fastify.post<{ Body: { name: string; email: string; password: string } }>(
  '/user_create',
  async (request, reply) => {
    reply
      .type('application/json')
      .code(200)
      .send({ response: await createUser(request.body) })
  }
)

fastify.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
