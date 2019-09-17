import React, { Component } from 'react';
import { navigate } from 'gatsby';
import { Location } from '@reach/router';
import queryString from 'query-string';

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

  render() {
    const { query } = this.state;

    return (
      <form
        className="search-form"
        onSubmit={event => {
          event.preventDefault();

          if (query) {
            navigate(`/search?query=${query}`, {
              state: {
                query
              }
            });
          }
        }}
      >
        {/* <img className="search-form__icon" src="" alt=""/> */}
        <input
          type="text"
          placeholder="Search topics"
          value={query}
          onChange={e => {
            this.setState({ query: e.target.value });
          }}
        />
      </form>
    );
  }
}

export default WithLocationSearchForm;
