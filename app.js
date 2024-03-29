require('dotenv').config()

const mongoose = require('mongoose')
const createError = require('http-errors')
const logger =  require('morgan')
const express = require('express')
const cors = require('cors')


require('./config/db.config')

const app = express()

/* Middlewares */
app.use(cors())
app.use(express.json())
app.use(logger('dev'))

/* Routes */
const routes = require('./config/routes')
app.use('/api', routes)

/* Handle errors */
app.use((req, res, next) => {
  next(createError(404, 'Route not found, msg from app.js"'))
})

app.use((error, req, res, next) => {
  if (error instanceof mongoose.Error.ValidationError) {
    error = createError(400, error);
  } else if (error instanceof mongoose.Error.CastError) {
    error = createError(404, "Resource not found, msg from app.js");
  } else if (error.message.includes("E11000")) {
    error = createError(400, `Duplicate :${Object.keys(error.keyPattern)[0]}`);
  } else if (!error.status) {
    console.log("<<<<<<<<<500",error);    
    error = createError(500, error);
  }

  if (error.status >= 500) {
    console.error(error);
  }

  const data = {};
  data.message = error.message;
  data.errors = error.errors
    ? Object.keys(error.errors).reduce(
        (errors, key) => ({
          ...errors,
          [key]: error.errors[key].message || error.errors[key],
        }),
        {}
      )
    : undefined;

  res.status(error.status).json(data);
});

const port = Number(process.env.PORT || 3002);

app.listen(port, () => {
  console.log(`Ready! Listen on port ${port}`);
});