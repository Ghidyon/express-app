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

// Access express module
const express = require('express');

// Initialize express
const app = express();

// Initialize express middleware
app.use(express.json({ extended: false }));

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Access environmental variables in .env file
require('dotenv').config();
const { PORT } = process.env;

// const port = process.env.PORT || PORT;

// Access connectDB function
const connectDB = require('./src/db');

// * Connect to database
connectDB();

// Access model
const Identity = require('./src/model');

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

// * Create a user identity
app.post('/users', (req, res) => {
    Identity.create(req.body, (err, identity) => {
        if (err) res.status(500).json({ error: err });
        else {
            return res.status(200).json({
                message: 'successfully created',
                newIdentity: identity
            });
        }
    });
});

// * Update a user's identity
app.put('/users/:id', (req, res) => {
    Identity.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, identity) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (!identity) {
            return res.status(404).json({ message: 'user identity not found' });
        }
        else {
            return res.status(200).json({
                message: 'successfully updated',
                updatedIdentity: identity
            });
        }
    });
});

// * Delete a user's identity
app.delete('/users/:id', (req, res) => {
    Identity.findByIdAndDelete(req.params.id, (err, identity) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (!identity) {
            return res.status(404).json({ message: 'user identity not found' });
        }
        else {
            return res.status(200).json({
                message: 'successfully deleted',
                deletedIdentity: identity
            });
        }
    });
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));