const ProductController = require('../../controllers/ProductController')

module.exports = (fastify, opts, done) => {
  fastify.get('/', ProductController.getProducts)

  done()
}