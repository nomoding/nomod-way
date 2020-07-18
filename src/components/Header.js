 /* eslint-disable */

import React, { Component } from 'react';
import { Link } from 'gatsby';

import LogoDark from '../img/logo-dark.svg';
import LogoLight from '../img/logo-light.svg';
import IconMenu from '../img/menu-icon.jsx';
import IconCross from '../img/cross-icon.svg';

const NavMenu = () => (
  <nav>
    <ul>
      <li>
        <a href="https://nomod.com" target="_blank" rel="noopener noreferrer">
          Nomod
        </a>
      </li>
      <li>
        <a href="https://careers.nomod.com" target="_blank" rel="noopener noreferrer">
          Careers
        </a>
      </li>
    </ul>
  </nav>
);

class Header extends Component {
  state = {
    fixHeder: false,
    showMobileMenu: false
  };

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.handleScroll);
  }

  handleScroll = () => {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    this.setState({
      fixHeder: scrolled > 40 ? true : false
    });
  };

  handleMobileMenu(mobileState) {
    this.setState({
      showMobileMenu: mobileState
    });
  }

  render() {
    const { fixHeder, showMobileMenu } = this.state;
    const { isAdditionalPage = false } = this.props;

    return (
      <div
        className={`${fixHeder && !showMobileMenu ? 'header header--fix' : 'header'} ${
          isAdditionalPage ? 'header--additional' : ''
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2 col-lg-2 col-md-6">
              <Link to="/">
                <img
                  src={fixHeder || isAdditionalPage ? LogoDark : LogoLight}
                  alt="Nomod"
                  title="Nomod"
                />
              </Link>
            </div>


              <div className="col-10 col-lg-10 col-md-6">
                <div className="header-nav--desktop">
                  <NavMenu />
                </div>

                <div className="header-nav--mobile">
                  <div
                    className="header-nav--mobile__btn"
                    onClick={() => this.handleMobileMenu(!showMobileMenu)}
                  >
                    <IconMenu />
                  </div>
                </div>
              </div>

          </div>
        </div>

        {/*
         *  Mobile Menu
         */}
        {showMobileMenu && (
          <div className="header-nav--mobile__menu">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-between">
                  <Link to="/">
                    <img src={LogoLight} alt="Nomod" title="Nomod" />
                  </Link>
                  <div onClick={() => this.handleMobileMenu(!showMobileMenu)}>
                    <img src={IconCross} alt="close" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="d-inline-flex flex-column">
                    <NavMenu />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
