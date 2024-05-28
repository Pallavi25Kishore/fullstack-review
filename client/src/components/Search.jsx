import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ onSearch }) => {

  const[term, setTerm] = useState('')

  const onChange = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  }

  const search = (event) => {
    event.preventDefault();
    console.log('term', term);
    onSearch(term);
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