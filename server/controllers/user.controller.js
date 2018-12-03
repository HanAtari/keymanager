const User = require('../models/user.model');
const userCreate = (req, res, next) => {
    console.log(req.body)
    const jamieAuthor = new User (req.body);
    jamieAuthor.save()
    res.json({
        status: true,
        data: req.body
    })
}

module.exports.userCreate = userCreate;
