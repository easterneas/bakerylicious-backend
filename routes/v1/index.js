module.exports = (fastify, opts, done) => {
  fastify.register(require('./categories'), { prefix: '/categories' })
  fastify.register(require('./customers'), { prefix: '/customers' })
  fastify.register(require('./products'), { prefix: '/products' })
  fastify.register(require('./transactions'), { prefix: '/transactions' })

  done()
}