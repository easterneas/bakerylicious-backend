const fp = require('fastify-plugin')

const CategoryController = require('../../controllers/CategoryController')
const { authenticate } = require('../../middleware/authentication')
const { authorize } = require('../../middleware/authorization')

const options = {
  onRequest: function(req, reply, done){
    console.log('ah 1')
    done()
  },
  // do authentication in preValidation
  // this supports array of functions
  preValidation: [
    authenticate,
    authorize
  ],
  preHandler: function(req, reply, done){
    console.log('ah 4')
    done()
  },
  // handler comes in here...
  preSerialization: function(req, reply, payload, done){
    console.log('ah 5')
    done()
  },
  onSend: function(request, reply, payload, done){
    console.log('ah 6')
    done()
  },
  onResponse: function(req, reply, done){
    console.log('ah 7')
    done()
  },
  // and its data is sent here.

  // this handles error, and it overrides
  // the global error handler
  // set by setErrorHandler
  errorHandler: function(err, req, reply){
    console.log('ah, error')
    console.log(err)
  },

  // this formats the error, and it overrides
  // the global error formatter handler
  // set by setSchemaErrorFormatter

  // this is the schema that filters out
  // unnecessary data
  // schema: {
  //   response: {
  //     200: {
  //       type: 'object',
  //       properties: {
  //         data: { type: 'array' },
  //         code: { type: 'number' }
  //       }
  //     }
  //   }
  // },

  logSerializers: 'data'
}

module.exports = (fastify, opts, done) => {
  fastify.get('/', options, CategoryController.getCategories)

  fastify.get('/:CategoryId', options, CategoryController.getOneCategory)

  done()
}