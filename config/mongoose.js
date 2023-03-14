// Adding modules
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ToDo_List');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error while connecting to the database'));

db.once('open', function() {
    console.log('Successfully connected to the database');
});