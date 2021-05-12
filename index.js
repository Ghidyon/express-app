// Access express module
const express = require('express');
const app = express();

// Access mongoose module
const mongoose = require('mongoose');

/* 
    TODO: Create a simple express application that
    - Connects to a database
    - Creates the payload: 
    - { message: String, data: Object }
    - This means you are to return an object containing a message that tells the client if the request is successful or not, and data object containing your result.
    - If there's an error in the request, the response should return the error message instead.
    - Get's the data created
    - Updates the data created
    - Deletes the data created

    * The data you are required to create should contain name, email and country

    !Very important:
    !You are required to upload your application to github and host it on heroku.
    !You are also required to create a simple documentation of your routes in your github readme file
    !You are to submit your github link with the hosted link in the readme file too
*/

// * Connect to a database
