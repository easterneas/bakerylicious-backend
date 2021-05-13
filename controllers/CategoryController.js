const redis = require('../config/redis')
const { Category } = require('../models')

module.exports = {
  // NOTE: don't use arrow function (() => {})
  //       on route handlers!
  getCategories: async function(req, reply) {
    // ...to make 'this' binds to Fastify instance
    this.log.info('dbslada')
    
    const { redis } = this

    let data = JSON.parse(await redis.get('categories'))

    if(!data) {
      data = await Category.findAll()
      await redis.set('categories', JSON.stringify(data))
    }

    return {
      data,
      code: 200
    }
  },

  getOneCategory: async function(req, reply) {
    const { CategoryId } = req.params
    const { redis } = this

    let data = JSON.parse(await redis.get(`category-id-${CategoryId}`))

    if(!data) {
      data = await Category.findByPk(CategoryId)
      await redis.set(`category-id-${CategoryId}`, JSON.stringify(data))
    }

    return {
      data,
      code: 200
    }
  }
}