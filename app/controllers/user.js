const { validationResult } = require('express-validator/check')

const store = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }

    return res.json({
        message: 'Done'
    })
}

module.exports = {
    store,
}
