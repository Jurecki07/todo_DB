const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const Busboy = require("busboy");
const path = require("path");
const fs = require("fs");
const models = require("./models");
const port = process.env.PORT || 8000;
const app = express();

let user;

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.urlencoded({
    extended: true

}));

// let todos = [];

app.get("/", function (req, res) {
    models.todos.findAll().then(function (todos) {
        console.log("todos", todos[0].title);
        res.render('index', {
            todos: todos
        })
    });
});

app.post("/newtodo", (req, res) => {
    let newTodo = req.body;
    newTodo.complete = false;
    models.todos.create({
        title: req.body.task
    });

    res.redirect("/");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});