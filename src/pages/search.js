import React from 'react';
import { StaticQuery, graphql, Link, navigate } from 'gatsby';
import { Index } from 'elasticlunr';
import queryString from 'query-string';
import kebabCase from 'lodash/kebabCase';

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

const POSTS_PER_PAGE = 5;

const TEST_RESULTS = [
  { id: 1, title: 'Title 1', html: 'some text' },
  { id: 2, title: 'Title 2', html: 'some text' },
  { id: 3, title: 'Title 3', html: 'some text' },
  { id: 4, title: 'Title 4', html: 'some text' },
  { id: 5, title: 'Title 5', html: 'some text' },
  { id: 6, title: 'Title 6', html: 'some text' },
  { id: 7, title: 'Title 7', html: 'some text' },
  { id: 8, title: 'Title 8', html: 'some text' },
  { id: 9, title: 'Title 9', html: 'some text' },
  { id: 10, title: 'Title 10', html: 'some text' },
  { id: 11, title: 'Title 11', html: 'some text' },
  { id: 12, title: 'Title 12', html: 'some text' },
  { id: 13, title: 'Title 13', html: 'some text' },
  { id: 14, title: 'Title 14', html: 'some text' },
  { id: 15, title: 'Title 15', html: 'some text' },
  { id: 16, title: 'Title 16', html: 'some text' },
  { id: 17, title: 'Title 17', html: 'some text' },
  { id: 18, title: 'Title 18', html: 'some text' },
  { id: 19, title: 'Title 19', html: 'some text' },
  { id: 20, title: 'Title 20', html: 'some text' },
  { id: 21, title: 'Title 21', html: 'some text' },
  { id: 22, title: 'Title 22', html: 'some text' },
  { id: 23, title: 'Title 23', html: 'some text' },
  { id: 24, title: 'Title 24', html: 'some text' },
  { id: 25, title: 'Title 25', html: 'some text' },
  { id: 26, title: 'Title 26', html: 'some text' }
];
class SearchPage extends React.Component {
  state = {
    query: '',
    results: [],
    limit: POSTS_PER_PAGE,
    offset: 0,
    activePage: 1
  };

  componentDidMount() {
    const { location } = this.props;
    const getQuery = location.search ? queryString.parse(location.search) : '';

    if (!getQuery) {
      navigate('/');
    }

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

  handlePagination = page => {
    this.setState({
      limit: page * POSTS_PER_PAGE,
      offset: (page - 1) * POSTS_PER_PAGE,
      activePage: page
    });
  };

  render() {
    const { results, query, limit, offset, activePage } = this.state;
    return (
      <Layout>
        <CommonFirstScreenSection isSearchPage handleSearchForm={this.search} />
        <ContentSectionWrapper
          limit={limit}
          offset={offset}
          activePage={activePage}
          searchQuery={query}
          searchResults={results}
          handlePagination={this.handlePagination}
        />
      </Layout>
    );
  }
}

const ContentSectionWrapper = ({
  searchQuery,
  searchResults,
  limit,
  offset,
  activePage,
  handlePagination
}) => {
  const QTY_OF_PAGES = Math.ceil(searchResults.length / 5);
  let Pages = [];

  for (let index = 0; index < QTY_OF_PAGES; index++) {
    Pages[index] = {
      isActive: activePage - 1 === index,
      number: index + 1
    };
  }

  return (
    <section className="search-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {searchResults.length ? (
              <div className="search-page__wrapper">
                <h2 className="search-page__title">
                  {searchResults.length} results for <strong>{searchQuery}</strong>
                </h2>

                <ul className="search-page__results">
                  {searchResults.slice(offset, limit).map(article => (
                    <li key={article.id}>
                      <Link
                        to={`${kebabCase(article.articleCategory)}-${kebabCase(
                          article.articleSubCategory
                        )}/${article.slug}`}
                      >
                        <h3>{article.title}</h3>
                        <p>{article.html.slice(0, 245)}...</p>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="search-page__pagination">
                  <nav>
                    {Pages.map(page => (
                      <span
                        key={page.number}
                        className={page.isActive ? 'active' : ''}
                        onClick={() => handlePagination(page.number)}
                      >
                        {page.number}
                      </span>
                    ))}

                    {/* <span to="search">2</span>
                  <span to="search">3</span>
                  <span to="search">4</span>
                  <span to="search">5</span>
                  <i>...</i>
                  <span to="search">32</span> */}
                  </nav>
                </div>
              </div>
            ) : (
              <div className="search-page__wrapper">
                <h2 className="search-page__title">
                  We were unable to find results for <strong>{searchQuery}</strong>
                </h2>

                <Link to="/#categories">Browse our category instead</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFormQuery;
