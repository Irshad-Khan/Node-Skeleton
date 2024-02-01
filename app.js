const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');


const webRoute = require('./routes/web');
const apiRoute = require('./routes/api');
const ErrorController = require('./Controllers/Errors/ErrorController')
const SetCurrentUrlMiddleware = require('./Middlewares/SetCurrentUrlMiddleware')
const Helpers = require('./Helpers/CustomHelper')

const app = express();
app.use(SetCurrentUrlMiddleware);
app.locals.helpers = Helpers;

// This use to set our view enjgne and direcetory
app.set('view engine', 'ejs');
app.set('views', 'Views');

// This used to access our static files images, css, js files 
app.use(express.static(path.join(__dirname, 'Public')));

// This use to get data from request in controller
app.use(bodyParser.urlencoded({ extended: false }));

// Register Routes
app.use(webRoute);
app.use('/api', apiRoute);

// If user enter wrong URL then it invoke
app.use(ErrorController.error404);

// Share a key in all our app in view file we just use "AppName"
app.locals.AppName = process.env.APP_NAME;
app.locals.AppEnv = process.env.APP_ENV;
// For Server Start
app.listen(process.env.PORT);
console.log(`App listening on port http://localhost:${process.env.PORT}`);