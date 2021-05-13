const { Product } = require('../models')

module.exports = {
  // Finds all products
  getProducts: async (req, reply) => {
    return {
      data: await Product.findAll()
    }
  },

  addNewProduct: async (req, reply) => {}
}