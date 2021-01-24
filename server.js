
require('dotenv').config();
require('rootpath')();

const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const accountController = require('accounts/account.controller');

//DB Connection
require('_middleware/db');

// rootpather
const errorHandler = require('_middleware/error-handler');

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    app.use(morgan('dev'))
}

//Routing
app.use('/account', accountController);

// global Error Handler
app.use(errorHandler);


const port = process.env.PORT;

app.listen(port, () => console.log(`server started at ${port}`))
