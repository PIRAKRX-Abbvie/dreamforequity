const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const apiMocker = require('connect-api-mocker');

const app = express();

const mockRespDir = `/${__dirname}/responses/`;
const port = 4201;
const apiRoot = '/api/';

app.options('*', cors())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(apiRoot, apiMocker(mockRespDir));

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});