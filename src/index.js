require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

/* 
  Database MongoDB
*/
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
  }
)

app.use(express.json()); /* utilização no formato json */
app.use(express.urlencoded({ extended: true })); /* lidar com requisições url enconded */
app.use(morgan('dev')); /* lib de log */
app.use('/files', express.static(path.resolve(__dirname,'..','tmp','upload')));

app.use(routes);

app.listen(3000);