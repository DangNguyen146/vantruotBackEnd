const express = require("express");
const todoRoutes = express.Router();

// Require Business model in our routes module
let Todos = require("./todos.model");

// Defined store route
todoRoutes.route("/add").post(function (req, res) {
  let todo = new Todos(req.body);
  todo
    .save()
    .then((todo) => {
      res.status(200).json({ todo: "todo in added successfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
todoRoutes.route("/").get(function (req, res) {
  Todos.find(function (err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

// Defined edit route
todoRoutes.route("/edit/:id").get(function (req, res) {
  let id = req.params.id;
  Todos.findById(id, function (err, business) {
    res.json(business);
  });
});

//  Defined update route
todoRoutes.route("/update/:id").post(function (req, res) {
  Todos.findById(req.params.id, function (err, todo) {
    if (!todo) res.status(404).send("data is not found");
    else {
      console.log(todo);
      todo.textTodo = req.body.textTodo;
      todo.status = req.body.status;
      todo.textTask = req.body.textTask;

      todo
        .save()
        .then((business) => {
          res.json("Update complete");
        })
        .catch((err) => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
todoRoutes.route("/delete/:id").get(function (req, res) {
  Todos.findByIdAndRemove({ _id: req.params.id }, function (err, todos) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = todoRoutes;
