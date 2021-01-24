
require('dotenv').config();
require('rootpath')();
const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const app = express();


// rootpather
const errorHandler = require('_middleware/error-handler');

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))

if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    app.use(morgan('dev'))
}



// global Error Handler
app.use(errorHandler);

const port = process.env.PORT;

app.listen(port, () => console.log(`server started at ${port}`))
