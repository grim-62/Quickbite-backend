require('dotenv').config({ path: "./.env" });
const express = require('express');
const app = express();

require('./models/db').connectDb();

const logger = require('morgan');
const Errorhandler = require('./utils/Errorhandler');
const { generatedError } = require('./middleware/errors');
const cors = require('cors');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');

app.use(expressSession({
    resave: true,
    saveUninitialized: true,
    secret: process.env.EXPRESS_SESSION_SECRET
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(logger('tiny'));

app.use('/user', require('./routers/indexRouter'));

app.use('*', (req, res, next) => {
    next(new Errorhandler(`Requested URL Not Found ${req.url}`, 404))
})
app.use(generatedError);

app.listen(process.env.PORT, console.log(`server is running on port : ${process.env.PORT}`))