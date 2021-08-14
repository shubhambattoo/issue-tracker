const sequelize = require('../db/mysql');
const { DataTypes } = require('sequelize');

const Issue = sequelize.define('issues', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncreament: true
  },
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
    defaultValue: true
  },
});

module.exports = Issue;
