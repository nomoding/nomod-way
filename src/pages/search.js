import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Index } from 'elasticlunr';
import queryString from 'query-string';

import Layout from '../components/Layout';
import CommonFirstScreenSection from '../components/CommonFirstScreenSection';

const SearchFormQuery = props => {
  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQueryTest {
          siteSearchIndex {
            index
          }
        }
      `}
      render={data => <SearchPage searchIndex={data.siteSearchIndex.index} {...props} />}
    />
  );
};

class SearchPage extends React.Component {
  state = {
    query: '',
    results: []
  };

  componentDidMount() {
    const { location } = this.props;
    const getQuery = location.search ? queryString.parse(location.search) : '';

    this.search(getQuery.query);
  }

  componentDidUpdate(prevProps) {
    if (
      (prevProps.location.state || this.props.location.state) &&
      (prevProps.location.state && prevProps.location.state.query) !==
        (this.props.location.state && this.props.location.state.query)
    ) {
      const getQuery = (this.props.location.state && this.props.location.state.query) || ``;

      this.search(getQuery);
    }
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex);

  search = evt => {
    const query = evt;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref))
    });
  };

  render() {
    const { results, query } = this.state;
    return (
      <Layout>
        <CommonFirstScreenSection isSearchPage handleSearchForm={this.search} />
        <ContentSectionWrapper searchQuery={query} searchResults={results} />
      </Layout>
    );
  }
}

const ContentSectionWrapper = ({ searchQuery, searchResults }) => (
  <section className="search-page">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="search-page__wrapper">
            <h2 className="search-page__title">
              {searchResults.length} results for <strong>{searchQuery}</strong>
            </h2>

            <ul className="search-page__results">
              {searchResults.map(article => (
                <li key={article.id}>
                  <Link to="article">
                    <h3>{article.title}</h3>
                    <p>{article.html.slice(0, 245)}...</p>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="search-page__pagination">
              <nav>
                <Link to="search" className="active">
                  1
                </Link>
                <Link to="search">2</Link>
                <Link to="search">3</Link>
                <Link to="search">4</Link>
                <Link to="search">5</Link>
                <span>...</span>
                <Link to="search">32</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SearchFormQuery;
