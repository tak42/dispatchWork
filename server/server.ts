import Fastify from 'fastify'

const server = Fastify()

server.get('/ping', async (request, reply) => {
  reply.type('application/json').code(200)
  return { hello: 'world' }
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
