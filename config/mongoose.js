// IMPORTING PACKAGE
const mongoose = require("mongoose");


// MAKING CONNECTION 
const DB = mongoose.connect('mongodb://localhost/hospital_API', { useNewUrlParser: true, useUnifiedTopology: true });


// Handle connection status
DB.then(() => {
    console.log('Connection successful!');
}).catch((err) => {
    console.log('No connection:', err);
});


// Setting it to db
const db = mongoose.connection;


// CHECKING CONNECTION
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});

module.exports = db;