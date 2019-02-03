const User = require('../models/user.model');

const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
};

const userLogin = async (req, res, next) => {
    try {
        const books = await User.findOne({
            login: req.body.login
        })
        if (books !== null) {
            const user = await User.findOne({
                login: req.body.login,
                password: req.body.password,
            })

            if (user !== null) {
                const code = randomInteger(1000000, 9999999);
                await User.updateOne({
                    login: req.body.login,
                    password: req.body.password,
                }, {inviteId: `${code}`})
                res.json({
                    status: true,
                    data: {inviteId: `${code}`}
                })
            } else {
                res.json({
                    status: false,
                    data: null,
                    error: {
                        description: 'неверный пароль'
                    }
                })
            }
        } else {
            res.json({
                status: false,
                data: null,
                error: {
                    description: 'пользователь не найден'
                }
            })
        }
    } catch (e) {

    }
}

module.exports.userLogin = userLogin;
