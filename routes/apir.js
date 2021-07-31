const router = require('express').Router();
const {addNewNote, deleteNote} = require('../lib/notes');
const notes = require('../db/db.json');


router.get('/notes', (req, res) => {res.send(notes);});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const newNote = addNewNote(req.body, notes);
    res.json(newNote);
});

router.get('/notes/:id', (req, res) =>{
    res.send(notes[req.params.id]);
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);
    res.json(true);
});

module.exports = router;