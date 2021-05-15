const { Transaction, TransactionDetails, Customer } = require('../models')

module.exports = {
  // Finds all transactions (for table listing)
  getTransactions: async function(req, reply){
    const { redis } = this

    let data = JSON.parse(await redis.get('transactions'))

    if(!data){
      data = await Transaction.findAll({ include: { model: 'Customer' } })

      await redis.set('transactions', JSON.stringify(data))
    }

    return {
      data,
      code: 200
    }
  },

  // Finds all transactions of a particular customer
  getTransactionsByCustomerId: async function(req, reply){
    const { CustomerId } = req.params

    if(!await Customer.findByPk(CustomerId)) throw new Error('No such customer ID')

    const { redis } = this

    let data = JSON.parse(await redis.get(`transactions-by-customer-id-${CustomerId}`))

    if(!data) {
      data = Transaction.findAll({ where: { CustomerId } })

      await redis.set(JSON.stringify(data))
    }

    return {
      data,
      code: 200
    }
  },

  // Get all details regarding a specific transaction
  getTransactionDetails: async function(req, reply){
    const { TransactionId } = req.params

    const { redis } = this

    let data = JSON.parse(redis.get(`transaction-id-${TransactionId}`))

    if(!data){
      data = await Transaction.findByPk(TransactionId, { include: 'TransactionDetails' })

      if(!data) throw new Error('No such ID')

      await redis.set(`transaction-id-${TransactionId}`, data)
    }

    return {
      data: transactionDetails,
      code: 200
    }
  },

  // 
  addNewTransaction: async function(req, reply){},

  updateTransaction: async function(req, reply){},
  
  deleteTransaction: async function(req, reply){}
}