// express app
const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require("mongoose");

const Recipe = require("../src/app/recipe_management_system/recipe");

// big chain of middlewares
const app = express();

// mongoose to connect to cloud mongo server
mongoose
    .connect("mike:mike1234@cluster0-kqyge.gcp.mongodb.net/node-angular?retryWrites=true")
    .then(() => {
        console.log("Connected to database.");
    })
    .catch(() => {
        console.log("Connection failed.");
    });

// required stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// recipelist
app.get('/api/recipes', (req, res, next) => {
    Recipe.find().then(documents => {
      res.status(200).json({
          message: 'Recipes listed successfully!',
          recipeList: documents
         });
    })
  });

// retrieverecipe
app.post('/api/recipes/:rName', (req, res, next) => {
    Recipe.find({ rName: req.params.rName }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Recipe found." });
    });
});

// addrecipe
app.post('/api/recipes', (req, res, next) => {
    const recipeList = new Recipe[{
        rName: req.body.rName,
        ingredients: req.body.ingredients
    }];
    console.log(recipeList); //debug
    recipeList.save();
    res.status(201).json({
      message: 'Recipe added successfully!',
     });
  });

  // deleterecipe
  app.delete("api/recipes/:rName", (req, res, next) => {
    Recipe.deleteOne({ rName: req.params.rName }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Recipe deleted." });
    });
  });

// exports the app constant and all the middlewares attached
module.exports = app;
