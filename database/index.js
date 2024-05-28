const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  full_name: String,
  html_url: String,
  description: String,
  stargazers_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  const savePromises = repos.map((repo) => {
    return new Repo(repo).save();
  });

  Promise.all(savePromises)
  .then(() => {
    callback(null);
  })
  .catch((err) => {
    callback(err);
  })

};

let getTop25 = (callback) => {
  Repo.find({}).sort('-stargezers_count').limit(25).exec(callback);
};

module.exports.save = save;
module.exports.getTop25 = getTop25;