import React, { useState } from 'react';

const Search = ({ onSearch }) => {

  const[term, setTerm] = useState('')

  const onChange = (e) => {
    event.preventDefault();
    setTerm(e.target.value);
  }

  const search = () => {
    //onSearch(term);
    event.preventDefault();
    axios.post('/repose', {reponame: term})
    .then((response) => {
       console.log('posted', response);
       //axios.get() // fill in
    });
    .catch((error) => {
      console.log(error);
    });
    setTerm('');
  }

  return (
    <div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={term} onChange={onChange}/>
      <button onClick={search}> Add Repos </button>
    </div>
  );
}

export default Search;