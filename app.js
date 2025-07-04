const express = require('express');

const mongoose = require('mongoose');
const mongodb = require('./db/configdb.json');
const joueurservice = require('./services/JoueurService');


const app = express();
app.use(express.json());
app.use('/user',joueurservice);

mongoose.connect(mongodb.uri)

.then(() =>{
    console.log('Connected to DB');
})


app.listen (3000 , () =>
    {
        console.log("srv is runing on port:3000")

    })


