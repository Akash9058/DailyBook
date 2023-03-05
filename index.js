const express = require('express');
const app = express();
const port = 1000;
const router= require('./routes/index');
const expressLayouts = require('express-ejs-layouts');
const database= require('./config/mongoose')
const bodyParser =require('body-parser')
const passport = require('passport');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./assets'));
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine','ejs');
app.set('views','./views');
 

app.use('/',require('./routes/index'));

app.listen(port, function (err) {
    if (err) { console.log('error', err); }

    console.log("server is running on port :", port);
})