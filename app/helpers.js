require('dotenv').config()

module.exports = {
    config (namespace) {
        namespace = namespace.split('.')
        var filename = namespace.shift()
        var config = require('../config/' + filename)
        var value = config

        for (let i = 0; i < namespace.length; i++) {
            value = value[namespace[i]]
        }

        return value
    },

    env (key, defaultValue) {
        if (process.env.hasOwnProperty(key)) {
            return process.env[key]
        }
        return defaultValue
    }
}