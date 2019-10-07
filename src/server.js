/**
 * Main file to run the Node server.
 */

 //imports
const express  = require('express');
const mongoose = require('mongoose');
const routes   = require('./routes');

const app = express();

/**
 * Connection to the MogoDB Data Base Cluster.
 */
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-it3b1.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json()); //this line turn possible tho return json format data.
app.use(routes);// call to the routes.

app.listen(3333);//port to be uses by Node server.
