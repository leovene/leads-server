'use strict';

const index = async(req,res) => {
    res.status(200).send({
        status: true,
        message: 'API em funcionamento',
        data: {
            version: process.env.APP_VERSION
        }
    });
};

export default index;