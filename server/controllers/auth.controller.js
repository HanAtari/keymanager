const User = require('../models/user.model');
const userCreate = (req, res, next) => {
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
                        res.json({
                            status: true,
                            data: user
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

module.exports.userCreate = userCreate;
