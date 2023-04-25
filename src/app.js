const express = require('express');
const mongoose = require('mongoose');
require('./config/db.config');

const app = express();

const port = 5000;

mongoose.connection.on('error', (error) => {
  console.log(`Mongodb connection error: ${error}`);
});

mongoose.connection.once('open', () => {
  console.log(`Mongodb connection established`);
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
