import React from 'react';
import { Link, graphql } from 'gatsby';
import { v4 } from 'uuid';

import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';

import PeopleImage from '../img/nomod-people.svg';
import RocketImage from '../img/nomod-rocket.svg';

const IndexPage = ({ data }) => (
  <Layout>
    <FirstScreenSection />
    <TopicsSection categories={data.getAllCategories.edges} />
  </Layout>
);

const FirstScreenSection = () => (
  <section className="first-screen">
    <div className="first-screen__wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-7 col-lg-7 col-md-12 first-screen__text">
            <h1>Nomod Way</h1>

            <h3>
              A guide to how we work at Nomod. The Nomod Way aspires to be a detailed, transparent, always working handbook on how we run Nomod, a fully distributed organisation
            </h3>

            <SearchForm />
          </div>

          <div className="col-12 col-xl-5 col-lg-5 col-md-12 first-screen__wrapper__images">
            <div className="first-screen__images">
              <img src={PeopleImage} alt="Nomod People" />
              <img src={RocketImage} alt="Nomod Rocket" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="first-screen__skew"></div>
  </section>
);

const Card = ({ url, title, description }) => (
  <div className="col-12 col-xl-4 col-lg-6 col-md-6">
    <Link to={url}>
      <div className="card">
        <div className="card__image"></div>
        <div className="card__title">{title}</div>
        <div className="card__description">{description}</div>
      </div>
    </Link>
  </div>
);

const TopicsSection = ({ categories }) => (
  <div id="categories" className="topics-section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="topics-section__title">Dive In</div>
        </div>

        {categories.map(({ node }) => (
          <Card
            key={v4()}
            url={node.fields.slug}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
          />
        ))}
      </div>
    </div>
  </div>
);

export default IndexPage;

export const pageQuery = graphql`
  query MainPage {
    getAllCategories: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "category-post" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;
