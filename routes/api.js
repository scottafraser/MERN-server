const express = require("express");
const router = express.Router();
// const Todo = require("../models/todo");
const Contact = require("../models/contact");

// router.get("/todos", (req, res, next) => {
//   //this will return all the data, exposing only the id and action field to the client
//   Todo.find({}, "action")
//     .then(data => res.json(data))
//     .catch(next);
// });

router.get("/contact", (req, res, next) => {
  //this will return all the data, exposing only the id and action field to the client
  Contact.find({})
    .then(data => res.json(data))
    .catch(next);
});

router.post("/contact", (req, res, next) => {
  if (req.body) {
    Contact.create(req.body)
      .then(data => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "Cannot update that contact"
    });
  }
});

// router.delete("/todos/:id", (req, res, next) => {
//   Todo.findOneAndDelete({ _id: req.params.id })
//     .then(data => res.json(data))
//     .catch(next);
// });

module.exports = router;
