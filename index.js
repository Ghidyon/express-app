// Access express module
const express = require('express');

// Initialize express
const app = express();

// Initialize express middleware
app.use(express.json({ extended: false }));

// Access environmental variables in .env file
require('dotenv').config();

const { PORT, CONNECTION_URI } = process.env;
// const { CONNECTION_URI } = process.env;

const port = process.env.PORT || PORT;

// Access mongoose module
const mongoose = require('mongoose');
const { Schema } = mongoose;

/* 
    TODO: Create a simple express application that
    - Connects to a database
    - Creates the payload: 
    - { message: String, data: Object }
    - This means you are to return an object containing a message that tells the client if the request is successful or not, and data object containing your result.
    - If there's an error in the request, the response should return the error message instead.
    - Gets the data created
    - Updates the data created
    - Deletes the data created

    * The data you are required to create should contain name, email and country

    ! Very important:
    * You are required to upload your application to github and host it on heroku.
    * You are also required to create a simple documentation of your routes in your github readme file
    * You are to submit your github link with the hosted link in the readme file too
*/

// * Connect to a database
mongoose.connect(CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Successfully connected to database!');
    app.listen(port, () => console.log(`App running on port:${port}`));
}).catch(err => handleError(err));

// * Declare Schema
const identitySchema = new Schema({
    name: String,
    email: String,
    country: String
});

// * Model database collection from identitySchema
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
}); */

// * Create a basic express route
app.get('/', (req, res) => {
    res.json({ message: 'You don access my Application! Oya sitdan!' });
});

// * Get all user identites
app.get('/users', (req, res) => {
    Identity.find({})
        .then(users => {
            return res.status(200).json({
                message: 'successful',
                users: users
            });
        })
        .catch(err => {
            return res.status(500).json({ message: err });
        });
});

// * Update user identity