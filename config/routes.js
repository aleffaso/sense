const express = require("express");
const routes = express.Router();

//Render main page
routes.get("/", (req,res) => {
    res.render("index")
});


module.exports = routes;