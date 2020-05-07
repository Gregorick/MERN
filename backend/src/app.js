const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// SETTINGS
app.set('port', process.env.PORT || 4000);

// MIDDLEWARES

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Ruta
app.use('/api/clientes', require('./routes/route.clientes'));

module.exports = app;