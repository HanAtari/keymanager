const User = require('../models/user.model');
const userCreate = (req, res, next) => {
    console.log(req)
    const jamieAuthor = new User ({
            login: 'Petro',
            password: '1235',
            email: 'satan@mail.ru',
            inviteId: '1',
    });
    jamieAuthor.save()
    res.json({status: true})
}

module.exports.userCreate = userCreate;
