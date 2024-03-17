// ****** Importing Dependencies & Database and Defining Port Number  ****** //
const express = require('express');
const port = process.env.PORT || 8000;
const db = require('./config/mongoose');

const passport = require('passport');
const passportJWT = require('./config/passport_jwt_strategy');

// ****** Starting the App ****** //
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

// ****** Redirecting Routes ****** //
app.use('/', require('./routes'));
app.get("/api/welcome",(req,res)=>{
  res.status(200).send({message:"welcome to hospital api"});
})

app.listen(port, function (err) {
    if (err) { console.log('error'); return; } // ****** Print if error ****** //
    
    console.log(`Server Running :: Port Number - ${port}`); // ****** Else print this ****** //
});
