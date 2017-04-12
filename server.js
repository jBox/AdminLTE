const express = require('express');
const path = require('path');
const app = express();

// static server
app.use(express.static("./"));

const server = app.listen(3000, "localhost", () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Server start at http://%s:%s', host, port);
});