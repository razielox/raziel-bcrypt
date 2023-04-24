'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt = require('bcrypt')
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
const memoryDB = []

//START_ASYNC -do not remove notes, place code between correct pair of notes.



//END_ASYNC

//START_SYNC

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash)
    bcrypt.hash(someOtherPlaintextPassword, saltRounds, (err, hash) => {
        console.log(hash)
        bcrypt.compare(someOtherPlaintextPassword, hash,(err, res) => {
            console.log(res)
        })
    })
    bcrypt.compare(myPlaintextPassword, hash,(err, res) => {
        console.log(res)
    })

      
})


//END_SYNC






























app.listen(process.env.PORT || 3000, () => {});
