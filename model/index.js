/* 
TODO:
- Define Schema
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
    name: 'Patricia',
    email: 'patricia@gmail.com',
    country: 'United States'
},
{
    name: 'Beckham',
    email: 'beckham@gmail.com',
    country: 'England'
},
{
    name: 'Paul',
    email: 'paul@gmail.com',
    country: 'Ireland'
}], (err, identity) => {
    if (err) throw err;
    else console.log({ newUser: identity });
});
 */
module.exports = Identity;