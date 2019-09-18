import React, { Component } from 'react';
import { navigate } from 'gatsby';
import { Location } from '@reach/router';
import queryString from 'query-string';

import SearchIcon from '../img/search-icon.svg';

const WithLocationSearchForm = props => (
  <Location>
    {({ location, navigate }) => (
      <SearchForm
        {...props}
        location={location}
        navigate={navigate}
        search={location.search ? queryString.parse(location.search) : {}}
      />
    )}
  </Location>
);

class SearchForm extends Component {
  state = {
    query: ``
  };

  componentDidMount() {
    const { isSearchPage, search } = this.props;

    if (isSearchPage && search) {
      this.setState({ query: search.query });
    }
  }

  handleSubmit = event => {
    const { query } = this.state;
    event.preventDefault();

    if (query) {
      navigate(`/search?query=${query}`, {
        state: {
          query
        }
      });
    }
  };

  handleKeyUp = event => {
    if (event.keyCode === 13) {
      event.target.blur();
    }
  };

  handleFocus = event => {
    event.target.select();
  };

  render() {
    const { query } = this.state;

    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <img
          className="search-form__icon"
          src={SearchIcon}
          onClick={this.handleSubmit}
          alt="search"
        />
        <input
          type="text"
          placeholder="Search topics"
          value={query}
          onKeyUp={this.handleKeyUp}
          onFocus={this.handleFocus}
          onChange={e => {
            this.setState({ query: e.target.value });
          }}
        />
      </form>
    );
  }
}

export default WithLocationSearchForm;
