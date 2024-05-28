import React from 'react';

const RepoList = ({ repos }) => {

  console.log('final', repos);
  return (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    {repos.map((repo) => (<div key={repo.id}>
      <p>id: {repo.id}</p>
      <p><a href={repo.html_url}>name: {repo.name}</a></p>
      <p> full_name: {repo.full_name}</p>
      <p>html_url: {repo.html_url}</p>
      <p>description: {repo.description}</p>
      <p>stargazers_count: {repo.stargazers_count}</p>
      <hr></hr>
    </div>))}
  </div>
  );
}

export default RepoList;
