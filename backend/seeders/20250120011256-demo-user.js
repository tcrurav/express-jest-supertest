'use strict';

require('dotenv').config();
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      id: 1,
      username: process.env.ADMIN_USER,
      password: bcrypt.hashSync(process.env.ADMIN_PASSWORD),
      name: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
