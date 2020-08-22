// Connect routes to journal data.
var journalData = require("note-taker-master\data\journalData.js");

// Routing
module.exports = function(app) {

    // GET request
    app.get("/api/journals", function(req, res) {
        res.json(journalData);
    });

    // POST request
    app.post("/api/journals", function(req, res) {
        journalData.push(req.body);
        res.json("saved");
    });

    // DELETE request
    app.delete("/api/journals/:index", function(req, res) {
        var elem = parseInt(req.params.index);
        var tempjournal = [];
        for (var i = 0; i < journalData.length; i++) {
            if (i !== elem) {
                tempjournal.push(journalData[i]);
            }
        }
        journalData = tempjournal;

        res.json("delete done");
    });


}