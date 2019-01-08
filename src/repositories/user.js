'use strict';

import db from '../models/index';

const getUser = async(userName,password) => {
    return db.User.findOne({ where: {userName, password} }).then(user => {
        return user != null;
    });
};

export { getUser }