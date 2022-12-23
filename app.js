const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const studentRoute = require('./routes/student');

const db = 'mongodb+srv://msabtain:sabtain123@cluster0.wsaz1cc.mongodb.net/test';

// MongoDB-Connection
mongoose.set("strictQuery", false);
mongoose.connect(db)
    .then(() => console.log('Connected!'));


// Initial-Route
app.get('/', (req, res) => {
    res.send('Initial Route is Running suucessfully');
})

// Student-Route
app.use('/student',studentRoute);




app.listen('1000', () => {
    console.log("App listening on server 1000");
})
