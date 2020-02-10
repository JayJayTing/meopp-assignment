const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors');
require('dotenv').config();
const { client } = require('./twitter');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT);
app.get('/', (req, res) => {
  res.send('Node working...');
});

app.get('/twitter/timeline', (req, res) => {
  var params = req.query;
  client.get('statuses/user_timeline', params, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      res.send(tweets);
    } else {
      res.send(error);
    }
  });
});

app.get('/twitter/pic', (req, res) => {
  var params = req.query;
  client.get('users/show', params, function(error, tweets, response) {
    if (!error) {
      res.send(tweets);
    } else {
      res.send(error);
    }
  });
});
