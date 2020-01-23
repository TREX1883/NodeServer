const express = require('express');

const app = express();

const welcomeRoutes = require('./routes/welcome');
// var bodyParser = require('body-parser');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use('/', welcomeRoutes);
app.use(welcomeRoutes);

// write the API here
// const welcome = "Hello World!"
app.get("/api", (req, res) => {
    // var x;
    let profile = {
        "first_name":"Daniel",
        "last_name":"Purrington",
        "age":36,
        "height":5.7,
        "weight":170
    }
    // for(x in profile)
    console.log('This is GET using route /api')
    res.json(profile)
})

module.exports = app;
