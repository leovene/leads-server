'use strict';

import { getUser } from '../repositories/user';

const authenticate = async(req, res) => {
    try {
        const result = await getUser(req.body.userName.toLocaleLowerCase(),req.body.password);
        res.status(201).send(result);
    }catch (e) {
        res.status(500).send({
            status: false,
            message: 'Falha ao processar sua requisição'
        });
    }
};

export { authenticate }
