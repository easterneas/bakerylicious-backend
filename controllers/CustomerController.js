const { Customer } = require('../models')

module.exports = {
  getCustomers: async function(req, reply){
    const { redis } = this

    let data = JSON.parse(await redis.get('customers'))

    if(!data) {
      data = await Customer.findAll({
        attributes: [ 'id', 'name', 'email', 'createdAt', 'updatedAt']
      })
      await redis.set('customers', JSON.stringify(data))
    }

    return {
      data,
      code: 200
    }
  },

  getOneCustomer: async function(req, reply){
    const { redis } = this
    const { CustomerId } = req.params

    let data = JSON.parse(await redis.get(`customer-id-${CustomerId}`))

    if(!data) {
      data = await Customer.findByPk(CustomerId, { include: { model: 'Transaction' } })

      if(!data) throw new Error('No such ID')

      await redis.set(`customer-id-${CustomerId}`, JSON.stringify(data))
    }

    return {
      data,
      code: 200
    }
  },

  // create, update, and delete
  addNewCustomer: async function(req, reply){
    // 
  },

  updateCustomer: async function(req, reply){
    // 
  },

  deleteCustomer: async function(req, reply){
    // 
  },
}