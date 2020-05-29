var fs = require("fs");
var notes = require ("../db/db.json"); //the notes that are created into the backend ARE working. 
var inc = notes[notes.length - 1]

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(notes)
        console.log(notes)
        console.log("test again")
    });
    app.post("/api/notes", function (req, res) {
        console.log(req.body);
        // console.log("test")
        var obj=req.body;
        obj.id=inc.id + 1;
        inc=obj;
        console.log(obj)
        notes.push(obj);
        console.log(notes);
        fs.writeFileSync("./db/db.json", JSON.stringify(notes), function(err) {
            if (err) throw err
        } )
        res.json(notes)
    });
    app.delete("/api/notes/:id", function (req, res) {
        console.log(req.params.id);
        for (i=0; i<notes.length; i++) {
            console.log(typeof parseInt(req.params.id, 10), typeof notes[i].id)
            if (parseInt(req.params.id, 10) === notes[i].id) {
                console.log("matched");
                notes.splice(i, 1);
            }
        }
        fs.writeFileSync("./db/db.json", JSON.stringify(notes), function(err) {
            if (err) throw err
        } )
        res.json(notes)
    } )
}