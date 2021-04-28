const { DataTypes } = require('sequelize');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("email_table",{

        send_email_id:{
            type: DataTypes.INTEGER(255),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        customer_id:{
            type: DataTypes.INTEGER(255),
            allowNull: true,
        },
        send_email_to:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        send_email_subject:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        send_email_body:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        send_email_service_name:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        send_email_confimation:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false
        },
        send_email_error:{
            type: DataTypes.TEXT,
            allowNull: false,
            default: "No Error"
        },
        createdBy:{
            type: DataTypes.INTEGER(255),
            allowNull: false,
            default: 0
        }
  })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("email_table");
  }
};
