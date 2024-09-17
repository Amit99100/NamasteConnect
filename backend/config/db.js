//mongoose is used to connect to our data base and make quereis to database . 
const mongoose = require("mongoose");
const colors = require("colors");

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

// connection to mongodb 
const connectDB = async () => {

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {

    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;

