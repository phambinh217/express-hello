var { env } = require('../app/helpers')

module.exports = {
    name: env('APP_NAME', 'Express Hello'),
    env: env('APP_ENV', '')
}
