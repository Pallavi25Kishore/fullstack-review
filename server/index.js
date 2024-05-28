const express = require('express');
let app = express();
let path = require('path');
let {getReposByUsername} = require('../helpers/github.js');
let dbHelper = require('../database/index.js');

// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
app.use(express.static(path.join(__dirname, '../client/dist' )));
app.use(express.json());

app.post('/repos', function (req, res) {
  var username = req.body.reponame;
  getReposByUsername(username, (err, response) => {
    if (err) {
      res.status(400);
    } else {
      console.log('sending for saving');
      dbHelper.save(response, (err) => {
        if (err) {
          res.sendStatus(400);
        } else {
          console.log('sending back status');
          res.sendStatus(201);
        }
      });
    }
  })

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  dbHelper.getTop25((err, result) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).json(result);
    }
  });

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

