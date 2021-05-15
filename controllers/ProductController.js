const { Product, Category } = require('../models')

module.exports = {
  // Finds all products
  getProducts: async function(req, reply) {
    const { redis } = this

    let data = JSON.parse(await redis.get('products'))

    if(!data) {
      data = await Product.findAll({
        include: {
          model: Category,
          attributes: ['name']
        },
        attributes: [ 'id', 'name', 'description', 'createdAt', 'updatedAt' ]
      })

      await redis.set('products', JSON.stringify(data))
    }

    return {
      data,
      code: 200
    }
  },

  getOneProduct: async function(req, reply){
    const { redis } = this
    const { ProductId } = req.params

    let data = JSON.parse(await redis.get(`product-id-${ProductId}`))

    if(!data) {
      data = await Product.findByPk(ProductId, { include: { model: 'Category' } })

      if(!data) throw new Error('No such ID')

      await redis.set(`product-id-${ProductId}`, JSON.stringify(data))
    }

    return {
      data,
      code: 200
    }
  },

  // create, update, and delete
  addNewProduct: async function(req, reply){
    // 
  },

  updateProduct: async function(req, reply){
    // 
  },

  deleteProduct: async function(req, reply){
    // 
  },
}