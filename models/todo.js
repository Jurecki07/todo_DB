'use strict';
module.exports = function(sequelize, DataTypes) {
  var todo = sequelize.define('todos', {
    title: DataTypes.STRING,
    details: DataTypes.STRING,
    priority: DataTypes.INTEGER
  }, {
    createdAt: 'created_at',
    updatedAt: 'completed_at',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return todo;
};