'use strict';

import { getAllEmployee, getEmployee, insertEmployee, deleteEmployee, updateEmployee } from '../repositories/employee';

const listAll = async(req, res) => {
    try {
        const result = await getAllEmployee();
        res.status(201).send(result);
    }catch (e) {
        res.status(500).send({
            status: false,
            message: 'Falha ao processar sua requisição'
        });
    }
};

const find = async(req, res) => {
    try {
        const result = await getEmployee(parseInt(req.params.id));
        res.status(201).send(result);
    }catch (e) {
        res.status(500).send({
            status: false,
            message: 'Falha ao processar sua requisição'
        });
    }
};

const create = async(req, res) => {
    try {
        const result = await insertEmployee(req.body.name,req.body.age,req.body.email);
        res.status(201).send(result);
    }catch (e) {
        res.status(500).send({
            status: false,
            message: 'Falha ao processar sua requisição'
        });
    }
};

const remove = async(req, res) => {
    try {
        const result = await deleteEmployee(parseInt(req.params.id));
        res.status(201).send(result);
    }catch (e) {
        res.status(500).send({
            status: false,
            message: 'Falha ao processar sua requisição'
        });
    }
};

const update = async(req, res) => {
    try {
        const result = await updateEmployee(parseInt(req.body.id),req.body.name,req.body.age,req.body.email);
        res.status(201).send(result);
    }catch (e) {
        res.status(500).send({
            status: false,
            message: 'Falha ao processar sua requisição'
        });
    }
};

export { listAll, find, create, remove, update }