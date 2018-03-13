require('appmetrics-dash').attach();
require('appmetrics-prometheus').attach();

const appName = require('./../package').name;
const express = require('express');
const http = require('http');
const log4js = require('log4js');
const localConfig = require('./config/local.json');
const nocache = require('nocache');
const compression = require('compression');
const bodyParser = require('body-parser');

const logger = log4js.getLogger(appName);
const app = express();
const serviceManager = require('./services/service-manager');

const port = process.env.PORT || localConfig.port;

app.disable('x-powered-by');

app.use(compression());
app.use(/\/((?!js).)*/, nocache());

require('./services/index')(app);
require('./routers/index')(app);

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
wss.on('connection', function(ws, req) {
  ws.on('message', function(message) {
    console.log('received: %s', message);
  });
  ws.send('connected');
});

server.listen(port, function listening() {
  console.log('Listening on %d', server.address().port);
});