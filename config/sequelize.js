process.NODE_ENV !== 'production' && require('dotenv').config()

module.exports = {
  "development": {
    use_env_variable: "DB_URL"
  },
  "test": {
    use_env_variable: "DB_TEST_URL"
  },
  "production": {
    use_env_variable: "DB_PRODUCTION_URL"
  }
}
