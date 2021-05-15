const ProductController = require('../../controllers/ProductController')

module.exports = (fastify, opts, done) => {
  fastify.get('/', ProductController.getProducts)
  fastify.get('/:ProductId', ProductController.getOneProduct)

  done()
}