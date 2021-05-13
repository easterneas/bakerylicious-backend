const app = require('./app')

const PORT = process.env.PORT || 3457
const HOST = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1'

const start = async () => {
  try {
    await app.listen(PORT, HOST)
  } catch (e) {
    app.log.error(e)
    process.exit(1)
  }
}

start()