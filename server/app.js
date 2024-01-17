const express = require('express');
const cors = require('cors');
const morgan = require("morgan")

const ProductRouter = require('./routes/products.routes');
const UsersRouter = require('./routes/products.routes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());

app.use('/api/v1/products', ProductRouter);
app.use('/api/v1/users', UsersRouter);

module.exports = app;
