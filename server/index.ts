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

fastify.get<{ Params: { email: string; password: string } }>('/:email', async (request, reply) => {
  const mail = String(request.params.email)
  const password = String(request.params.password)
  reply
    .type('application/json')
    .code(200)
    .send({ response: { user: await getUser(mail, password), email: mail } })
})

fastify.post<{ Body: { name: string; email: string; password: string } }>(
  '/user',
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
