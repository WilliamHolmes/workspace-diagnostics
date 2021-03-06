const express = require('express');
const http = require('http');
const nocache = require('nocache');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.disable('x-powered-by');

const port = process.env.PORT || 3000;

app.use(compression());
app.use(/\/((?!js).)*/, nocache());

app.use("/headers/Authorization", function (req, res, next) {
  if (req.headers['authorization'] === 'Basic SGVsbG8gV29ybGQ=') {
    res.sendStatus(200);
  } else {
    res.sendStatus(406);
  }
});

app.use("/headers/:header", function (req, res, next) {
  const { params: { header = '' } } = req;
  if (req.headers[header.toLowerCase()]) {
    res.sendStatus(200)
  } else {
    res.sendStatus(404)
  }
});

app.use("/method", function (req, res, next) {
  res.sendStatus(200);
});

app.use("/protocol", function (req, res, next) {
  res.sendStatus(200);
});

const WebSocket = require('ws');
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname, 'dist')));

wss.on('connection', function(ws, req) {
  console.log('socket connected');
  ws.on('message', function(message) {
    console.log('received: %s', message);
  });
  ws.send('connected');
});

server.listen(port, () => {
  console.log('Listening on %d', port);
});
