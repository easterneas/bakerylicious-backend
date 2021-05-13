const { Customer } = require('../models')

module.exports = {
  getCustomers: function(req, reply){
    const { redis } = this

    let data = await redis.get('customers')

    if(!data) {
      data = await Customer.findAll({
        attributes: [ 'name', 'email' ]
      })
    }

    return {
      data: await Customer.findAll({
        attributes: [ 'name', 'email' ]
      })
    }
  },

  getCustomerDetails: function(req, reply){
    const { CustomerId } = req.params

    return {
      data: await Customer.findByPk(CustomerId, { include: { model: 'Transaction' } })
    }
  }
}