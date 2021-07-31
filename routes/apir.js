const router = require('express').Router();
const db = require('../')

fs.readFile(path.join(__dirname, '../db/db.json'), "utf8", (err, data)=>{
    if (err) throw err

    const note = JSON.parse(data);

    router.get('/notes', (req, res) => {  });

    router.post('/notes', (req, res) => {
        let newBody = req.body;
        console.log(note);
        note.push(newBody);
        console.log(note);
        update(note);
    });

    router.get('/notes/:id', (req, res) =>{
        res.send(note[req.params.id]);
        console.log("tried to touch note");
    });

    router.delete('/notes/:id', (req, res) => {
        console.log(note);
        note.splice(req.params.id, 1);
        console.log(note);
        update(note);
    });

});

module.exports = router;