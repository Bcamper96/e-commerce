// Import the Sequelize library and its DataTypes module
const { Model, DataTypes } = require('sequelize');

// Import the sequelize instance from the connection.js file
const sequelize = require('../config/connection');

// Define a new Product model by extending the Sequelize Model class
class Product extends Model {}

// Define the Product model's columns and their data types
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
        unique: false
      }
    }
  },
  // Define some options for the Product model
  {
    sequelize, // Use the sequelize instance imported from connection.js
    timestamps: false, // Don't use createdAt and updatedAt fields in the table
    freezeTableName: true, // Use the same name for the table as the model name
    underscored: true, // Use snake_case instead of camelCase for column names
    modelName: 'product', // Set the model name to 'product'
  }
);

// Export the Product model so it can be used by other parts of the application
module.exports = Product;
