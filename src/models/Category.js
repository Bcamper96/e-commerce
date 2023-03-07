// Import the Sequelize library and its DataTypes module
const { Model, DataTypes } = require('sequelize');

// Import the sequelize instance from the connection.js file
const sequelize = require('../config/connection.js');

// Define a new Category model by extending the Sequelize Model class
class Category extends Model {}

// Define the Category model's columns and their data types
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  // Define some options for the Category model
  {
    sequelize, // Use the sequelize instance imported from connection.js
    timestamps: false, // Don't use createdAt and updatedAt fields in the table
    freezeTableName: true, // Use the same name for the table as the model name
    underscored: true, // Use snake_case instead of camelCase for column names
    modelName: 'category', // Set the model name to 'category'
  }
);

// Export the Category model so it can be used by other parts of the application
module.exports = Category;
