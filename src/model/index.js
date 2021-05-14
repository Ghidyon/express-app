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

// * Create user identities
/* Identity.insertMany([{
    name: 'patricia',
    email: 'patricia@gmail.com',
    country: 'united states'
},
{
    name: 'beckham',
    email: 'beckham@gmail.com',
    country: 'england'
},
{
    name: 'paul',
    email: 'paul@gmail.com',
    country: 'ireland'
}], (err, identity) => {
    if (err) throw err;
    else console.log({ newUser: identity });
}); */

module.exports = Identity;