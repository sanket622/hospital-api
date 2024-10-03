<<<<<<< HEAD
require('dotenv').config(); 
const express = require('express');
const mongoose = require('./config/mongoose');
=======
// ****** Importing Dependencies & Database and Defining Port Number ****** //
require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const db = require('./config/mongoose');
>>>>>>> 0433db7294c33361619c252a5f13a14e37851a5b
const passport = require('passport');
const passportJWT = require('./config/passport_jwt_strategy');
const routes = require('./routes');

<<<<<<< HEAD
const port = process.env.PORT || 8000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());


app.use('/', routes);

app.get("/api/welcome", (req, res) => {
  res.status(200).json({ message: "Welcome to the Hospital API" });
});


app.listen(port, (err) => {
  if (err) {
    console.error('Server error:', err);
    return;
  }
  console.log(`Server running on port ${port}`);
=======
// Define the port using the environment variable or fallback to 8000
const port = process.env.PORT || 8000;

// ****** Starting the App ****** //
const app = express();

// Use middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// ****** Redirecting Routes ****** //
app.use('/', require('./routes'));

// Sample endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Hospital API');
});
// Start the server
app.listen(port, function (err) {
    if (err) {
        console.log('Error starting server:', err);
        return;
    }

    console.log(`Server Running :: Port Number - ${port}`);
>>>>>>> 0433db7294c33361619c252a5f13a14e37851a5b
});
