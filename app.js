// All required modules
const express = require('express');
// Adding the layouts
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');

const port = 8000; // setting up the port number
const app = express(); // Creating or firing the application

app.use(expressLayouts); // Using the layouts
// Extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use express router
app.use('/', require('./routes')); // To provide the routes
app.use(bodyParser()); // To convert the form data into the json format
app.use(express.urlencoded());
app.use(express.static('./assets')); // To access the static files

// Setting up the view engine
app.set('view engine', 'ejs');

// To set the path
app.set('views', './views');


// Creating the server
app.listen(port, function(err) {
    if (err) {
        console.log(`Error while starting the application: ${err} `);
    }
    console.log(`Application is runnning on: ${port}`);
});