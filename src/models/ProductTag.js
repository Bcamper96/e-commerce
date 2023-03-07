// Import the Sequelize library and its DataTypes module
const { Model, DataTypes } = require('sequelize');

// Import the sequelize instance from the connection.js file
const sequelize = require('../config/connection');

// Define a new ProductTag model by extending the Sequelize Model class
class ProductTag extends Model {}

// Define the ProductTag model's columns and their data types
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
        unique: false
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag',
        key: 'id',
        unique: false
      }
    },
  },
  // Define some options for the ProductTag model
  {
    sequelize, // Use the sequelize instance imported from connection.js
    timestamps: false, // Don't use createdAt and updatedAt fields in the table
    freezeTableName: true, // Use the same name for the table as the model name
    underscored: true, // Use snake_case instead of camelCase for column names
    modelName: 'product_tag', // Set the model name to 'product_tag'
  }
);

// Export the ProductTag model so it can be used by other parts of the application
module.exports = ProductTag;
