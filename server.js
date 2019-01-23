require('./models/db');
require('dotenv').config();
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
require('./models/employee.model');
// const employeeController = require('./controllers/employeeController');
var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts/'
}));
app.set('view engine', 'hbs');
// app.use(express.static("public"));
app.use("/public", express.static(__dirname + "/public"));
app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});
const appRoutes = require('./routes.js')(app)