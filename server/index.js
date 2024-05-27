const express = require('express');
let app = express();
let path = require('path');
let getRepos = require('../helpers/github.js');

// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
app.use(express.static(path.join(__dirname, '../client/dist' )));
app.use(express.json());

app.post('/repos', function (req, res) {
  var username = req.body.reponame;
  getRepos.getReposByUsername(username, (err, response) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).json(response); //- save to database
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
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

