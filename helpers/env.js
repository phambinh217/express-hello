require('dotenv').config()

module.exports = {
    env (key, defaultValue) {
        if (process.env.hasOwnProperty(key)) {
            return process.env[key]
        }
        return defaultValue
    }
}