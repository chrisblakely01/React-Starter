import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
//import authCheck from '../authCheck.config'

/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://chrisblakely01.eu.auth0.com/.well-known/jwks.json"
  }),
  audience: 'http://pluralsignt-management-system.com',
  issuer: "https://chrisblakely01.eu.auth0.com/",
  algorithms: ['RS256']
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});
