import Fastify from 'fastify'
import cors from '@fastify/cors'
import { getUser, getAllUsers, createUser } from './api/user'
import { emit } from 'process'

const fastify = Fastify()

fastify.register(cors, {
  // put your options here
})

fastify.get('/user', async (request, reply) => {
  const users = await getAllUsers()
  reply.type('application/json').code(200).send({ response: users })
})

fastify.get<{ Params: { email: string } }>('/:email', async (request, reply) => {
  const mail = String(request.params.email)
  reply
    .type('application/json')
    .code(200)
    .send({ response: { user: await getUser(mail), email: mail } })
})

fastify.post<{ Body: { name: string; email: string } }>('/user', async (request, reply) => {
  const bodyName = request.body.name
  const bodyEmail = request.body.email
  reply
    .type('application/json')
    .code(200)
    .send({ response: await createUser({ name: bodyName, email: bodyEmail }) })
})

fastify.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
