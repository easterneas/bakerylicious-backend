const TransactionController = require('../../controllers/TransactionController')

module.exports = (fastify, opts, done) => {
  fastify.get('/', TransactionController.getTransactions)
  fastify.get('/customer/:CustomerId', TransactionController.getTransactionsByCustomerId)
  fastify.get('/:TransactionId', TransactionController.getTransactionDetails)

  done()
}