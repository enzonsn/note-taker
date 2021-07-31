const router = require('express').Router();
const fs = require('fs');
const path = require('path');

function addNewNote(body, notes){
    const newNote = body;
    notes.push(newNote);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes, null, 2), err =>{
        if(err) {console.log('error', err);}
     });
    return newNote;
}

function deleteNote(id, notes){
    for(let i = 0; i < notes.length; i++){
        const note = notes[i];
        if(note.id == id){
            notes.splice(i, 1);
            fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes, null, 2));
            break;
        }
    }
}

module.exports = {addNewNote, deleteNote};