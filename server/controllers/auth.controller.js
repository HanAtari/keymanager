const User = require('../models/user.model');

const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
};

const userLogin = (req, res, next) => {
    User.findOne({
        login: req.body.login
    }).exec(function(err, books) {
            if (err) throw err;

            if (books !== null) {
                User.findOne({
                    login: req.body.login,
                    password: req.body.password,
                }).exec((err, user) => {
                    if (user !== null) {
                        const code = randomInteger(1000000, 9999999);
                        User.updateOne({
                            login: req.body.login,
                            password: req.body.password,
                        }, {inviteId: `${code}`}).exec((err, user) => {
                            res.json({
                                status: true,
                                data: { code: code }
                            })
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
                })
            }  else {
                res.json({
                    status: false,
                    data: null,
                    error: {
                        description: 'пользователь не найден'
                    }
                })
            }

        });
}

module.exports.userLogin = userLogin;
