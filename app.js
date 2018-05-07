const express = require('express');
const indexRouter = require('./routes/index');
const app = express();

app.use(express.json());
app.use('/', indexRouter);

app.use(function(err, req, res) {
  res.send(err.status || 500);
});

module.exports = app;
