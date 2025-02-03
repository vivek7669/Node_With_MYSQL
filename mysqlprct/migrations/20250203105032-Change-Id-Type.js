'use strict';

const { STRING, INTEGER } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const transaction = await queryInterface.sequelize.transaction();

  try {
     await queryInterface.changeColumn("Users","id",{
        type : STRING,
        autoIncrement : false,
        defaultValue : ""
     },{transaction})

     await transaction.commit(); 

  } catch (error) {
    await transaction.rollback();
    throw new Error(error)
  }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
          await queryInterface.changeColumn("Users","id",{
            type : INTEGER,
            autoIncrement : true,
            allowNull : false
        },{transaction})

        transaction.commit()

    } catch (error) {
      transaction.rollback()
      throw new Error(error);
    }
  }
};
