const userRoutes = require('./routes/user.route');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
require('./config/db.config');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use('/api/', userRoutes);

mongoose.connection.on('error', (error) => {
  console.log(`Mongodb connection error: ${error}`);
});

mongoose.connection.once('open', () => {
  console.log(`Mongodb connection established`);
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
