require('dotenv').config(); 
const express = require('express');
const mongoose = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport_jwt_strategy');
const routes = require('./routes');

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
});
