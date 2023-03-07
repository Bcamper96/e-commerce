// Import the Sequelize library and its DataTypes module
const { Model, DataTypes } = require('sequelize');

// Import the sequelize instance from the connection.js file
const sequelize = require('../config/connection.js');

// Define a new Tag model by extending the Sequelize Model class
class Tag extends Model {}

// Define the Tag model's columns and their data types
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  // Define some options for the Tag model
  {
    sequelize, // Use the sequelize instance imported from connection.js
    timestamps: false, // Don't use createdAt and updatedAt fields in the table
    freezeTableName: true, // Use the same name for the table as the model name
    underscored: true, // Use snake_case instead of camelCase for column names
    modelName: 'tag', // Set the model name to 'tag'
  }
);

// Export the Tag model so it can be used by other parts of the application
module.exports = Tag;
