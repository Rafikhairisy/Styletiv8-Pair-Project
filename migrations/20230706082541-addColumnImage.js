'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn("Products", 'image', { type: Sequelize.STRING })
  },

  down(queryInterface, Sequelize) {
    return queryInterface.removeColumn("Products", 'image')
  }
};
