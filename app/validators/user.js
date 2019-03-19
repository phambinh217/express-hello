const { check, body } = require('express-validator/check')

const store = () => {
    return [
        check('username').isEmail().withMessage('Không đúng địa chỉ email'),
        check('password').isLength({ min: 5 }).withMessage('Mật khẩu quá ngắn')
    ]
}

module.exports = {
    store,
}
