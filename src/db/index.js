/* 
    TODO:
    - Create a connection function for mongoDB
    - Start a local mongoDB server connection
*/

// Access mongoose module
const mongoose = require('mongoose');

// Access environmental variables in .env file
require('dotenv').config();
const { CONNECTION_URI } = process.env;

// mongoose-connectDB async function
const connectDB = async () => {
    try {
        await mongoose.connect(CONNECTION_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log('Successfully connected to database!');
    } catch (error) {
        console.error(error.message);
        // exit with failure
        process.exit(1);
    }
}

module.exports = connectDB;