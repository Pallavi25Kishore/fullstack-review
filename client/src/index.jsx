import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

const App = () => {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get('/repos')
      .then((response) => {
       setRepos(response.data);
      })
      .catch((error) => {
      console.log(error);
      });
  }, []);

  const search = (term) => {
    axios.post('/repos', {reponame: term})
    .then((response) => {
       console.log('posted', response);
       axios.get('/repos')
       .then((response) => {
        setRepos(response.data);
        console.log('gotten repo array', repos);
       })
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));