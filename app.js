if(process.env.NODE_ENV !== 'production') require('dotenv').config()

const app = require('fastify')({ logger: true })

app.setErrorHandler(require('./middleware/error-handler'))

app
// register plugins
.register(require('fastify-cors'), require('./config/cors.js'))
.register(require('fastify-redis'), require('./config/redis.js'))
.register(require('fastify-bcrypt'), require('./config/bcrypt.js'))
.register(require('fastify-jwt'), require('./config/jwt.js'))
// register routes plugin
// v1
.register(require('./routes/v1'), { prefix: '/v1' })

module.exports = app