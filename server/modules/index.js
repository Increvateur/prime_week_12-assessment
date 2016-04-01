var express = require("express");
var router = express.Router();
var path = require("path");
var Heroes = require("../models/heroes.js");

router.get("/viewhero", function(req, res){
  Heroes.find({}, function(err, data){
    if (err) {
      console.log("Error Viewing Heroes from the Database", err);
    }
    res.send(data);
  });
});

router.post("/addhero", function (req, res) {
  var newHero = new Heroes({"alias" : req.body.alias, "first_name" : req.body.first_name, "last_name" : req.body.last_name, "city" : req.body.city, "power_name" : req.body.power_name });
  newHero.save(function(err, data) {
    if (err) {
      console.log("Error Saving Hero to Database", err);
    }
    res.send(data);
  });
});

router.delete("/deletehero/:id", function(req,res) {
  Heroes.remove({_id : req.params.id}, function(err, data) {
    if (err) {
      console.log("Error Deleting Hero from Database", err);
    }
    res.status(200).send();
  });
});

router.get("/*", function(req, res) {
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;
