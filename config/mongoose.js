// Importing the Mongoose package
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// Use environment variable for MongoDB URI
const uri = process.env.MONGODB_URI;

// Making the connection
mongoose.connect(uri, {
    useNewUrlParser: true,      // Use the new URL parser
    useUnifiedTopology: true,   // Use the new Server Discover and Monitoring engine
    useCreateIndex: true,       // Use createIndexes instead of deprecated ensureIndex
    writeConcern: {             // Use writeConcern for consistency
        w: 'majority',
        wtimeout: 5000
    }
}).then(() => {
    console.log('Connection successful!');
}).catch((err) => {
    console.error('No connection:', err);
});

// Setting it to db
const db = mongoose.connection;

// Checking the connection
// If an error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));

// When the DB connects successfully
db.once("open", function () {
    console.log("Successfully connected to DB");
});

module.exports = db;
