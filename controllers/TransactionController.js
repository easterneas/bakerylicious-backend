const { Transaction, TransactionDetails, Customer } = require('../models')

module.exports = {
  // Finds all transactions (for table listing)
  getTransactions: async function(req, reply){
    return {
      data: await Transaction.findAll(),
      code: 200
    }
  },

  // Finds all transactions of a particular customer
  getTransactionsByCustomerId: async function(req, reply){
    const { CustomerId } = req.params

    if(!await Customer.findByPk(CustomerId)) throw new Error('No such customer ID')

    return {
      data: await Transaction.findAll({ where: { CustomerId } }),
      code: 200
    }
  },

  // Get all details regarding a specific transaction
  getTransactionDetails: async function(req, reply){
    const { TransactionId } = req.params
    const transactionDetails = await Transaction.findByPk(TransactionId, { include: TransactionDetails })

    if(!transactionDetails) throw new Error('No such transaction ID')

    return {
      data: transactionDetails,
      code: 200
    }
  },

  createNewTransaction: async function(req, reply){},

  updateTransaction: async function(req, reply){},
  
  deleteTransaction: async function(req, reply){}
}