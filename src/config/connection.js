// Load environment variables from a .env file
require('dotenv').config();

// Import the Sequelize library
const Sequelize = require('sequelize');

// Create a new Sequelize instance using the JAWSDB_URL environment variable if it exists, 
// otherwise use the DB_NAME, DB_USER, and DB_PASSWORD environment variables.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Export the sequelize instance so it can be used by other parts of the application
module.exports = sequelize;
