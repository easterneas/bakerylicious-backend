const app = require('./app')

const PORT = process.env.SERVER_PORT || 3457

const start = async () => {
  try {
    await app.listen(PORT)
  } catch (e) {
    app.log.error(e)
    process.exit(1)
  }
}

start()