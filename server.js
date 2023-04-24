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

    bcrypt.hash('passw0rd!', 13, (err, hash) => {
        console.log(hash);
        //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
    });
    bcrypt.compare(myPlaintextPassword, hash,(err, res) => {
        console.log(res)
        bcrypt.compare('passw0rd!', hash, (err, res) => {
          console.log(res); //true
        });
    })

      
})


//END_SYNC






























app.listen(process.env.PORT || 3000, () => {});
