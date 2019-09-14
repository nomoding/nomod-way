import React from 'react';
import { navigate } from 'gatsby';

const SearchForm = () => (
  <form
    className="search-form"
    onSubmit={event => {
      event.preventDefault();
      navigate('/search/');
    }}
  >
    {/* <img className="search-form__icon" src="" alt=""/> */}
    <input type="text" placeholder="Search topics" />
  </form>
);

export default SearchForm;
