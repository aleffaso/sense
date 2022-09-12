const express = require('express');
const routes = express.Router();


//main page
routes.get('/', (req,res) => {
    res.render('index', {token: req.session.token}); 
});

module.exports = routes;