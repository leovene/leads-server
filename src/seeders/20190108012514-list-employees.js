'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employees', [
      {
        name: 'Funcionário Um',
        age: 30,
        email: 'funcionarioUm@gmail.com'
      },
      {
        name: 'Funcionário Dois',
        age: 31,
        email: 'funcionarioDois@gmail.com'
      },
      {
        name: 'Funcionário Três',
        age: 32,
        email: 'funcionarioTrês@gmail.com'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  }
};
