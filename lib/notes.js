const router = require('express').Router();
const fs = require('fs');
const path = require('path');

function update(note){
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(note), err =>{
        if(err) {console.log('error', err);}
     });
    return note;
}

module.exports = {update};