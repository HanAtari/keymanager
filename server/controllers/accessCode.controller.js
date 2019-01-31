const User = require('../models/user.model');

const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
};

const findUser = async (inviteId) => {
    const user = await User.findOne({
        inviteId
    });

    return Boolean(user);
};

module.exports.findUser = findUser;
