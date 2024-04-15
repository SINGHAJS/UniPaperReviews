require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express(); // express app
const PORT = process.env.PORT || 9000;
const DB_URI = process.env.MONGO_DB_URI;

// routes
const paperRoutes = require('./routes/api/papers');

// middleware
app.use(express.json());
app.use((request, response, next) => {
  // response.json({ msg: 'server echo' });
  console.log(request.path, request.method);
  next();
});

// routes
app.use('/api/paper-review-app/', paperRoutes);

// connect to database
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log('Database Connection Established');

    // listen for requests
    app.listen(PORT, () => {
      console.log('Listening on Port: ' + PORT);
    });
  })
  .catch((error) => console.log(error));
