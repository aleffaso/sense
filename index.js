const dotenv = require("dotenv");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const routes = require("./config/routes");

dotenv.config();

//Run EJS to render HTML
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Body parser to use partials
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Path from routes
app.use(routes)

//Server open in 3000 port
app.listen(process.env.PORT || 3000,() => { 
    console.log("Server Running");
});