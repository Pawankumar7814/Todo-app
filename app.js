// All required modules
const express = require('express');

// setting up the port number
const port = 8000;

// Creating or firing the application
const app = express();




// Creating the server
app.listen(port, function(err) {
    if (err) {
        console.log(`Error while starting the application: ${err} `);
    }
    console.log(`Application is runnning on: ${port}`);
});