import Fastify from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify()

fastify.register(cors, {
  // put your options here
})

fastify.post('/ping', async (request, reply) => {
  const body = request.body
  return { response: body }
})

fastify.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
