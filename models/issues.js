const sequelize = require('../db/mysql');
const { DataTypes } = require('sequelize');

const Issue = sequelize.define('issue', {
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  priority: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  assignee: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  isOpen: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  created: {
    type: DataTypes.TimeStamp,
    allowNull: false,
  },
  updated: {
    type: DataTypes.TimeStamp,
    allowNull: false,
  },
});

module.exports = Issue;
