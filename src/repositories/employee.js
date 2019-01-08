'use strict';

import db from '../models/index';

const getAllEmployee = async() => {
    return db.Employee.findAll().then(employee => {
        return employee;
    });
};

const getEmployee = async(id) => {
    return db.Employee.findOne({ where: {id} }).then(employee => {
        return employee;
    });
};

const insertEmployee = async(name,age,email) => {
    return db.Employee.create({name, age, email}).then(employee => {
        return employee;
    });
};

const deleteEmployee = async(id) => {
    return db.Employee.destroy({ where: {id} }).then(employee => {
        return true;
    });
};

const updateEmployee = async(id,name,age,email) => {
    if (getEmployee(id) != null) {
        return insertEmployee(name,age,email);
    }
};

export { getAllEmployee,getEmployee,insertEmployee,deleteEmployee,updateEmployee }