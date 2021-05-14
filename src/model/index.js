/* 
TODO:
- Define Model Schema
- Add data to database
*/

// Access mongoose module
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Declare Schema
const identitySchema = new Schema({
    name: String,
    email: String,
    country: String
});

// Model database collection from identitySchema
const Identity = mongoose.model('identity', identitySchema);

module.exports = Identity;