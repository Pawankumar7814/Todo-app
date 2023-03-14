// All required modules
const express = require('express');
const bodyParser = require('body-parser');
// setting up the port number
const port = 8000;
// Creating or firing the application
const app = express();

// use express router
app.use('/', require('./routes'));
app.use(bodyParser());
app.use(express.urlencoded());
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