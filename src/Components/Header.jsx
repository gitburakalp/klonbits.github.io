import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import routes from '../js/header-menu';
import CliableImage from './ClickableImage.jsx';

class Header extends Component {
  state = {
    isShow: false,
  };

  onShownChange = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    let isShow = this.state.isShow;
    const { t } = this.props;

    return (
      <Router>
        <header
          className={`header ${isShow ? 'is-shown' : ''}`}
        >
          <nav className="header-nav">
            <CliableImage
              to="!#"
              class="header-logo"
              imgClass="img-fluid"
              imgSource="/Storage/svg/klonbits-icon.svg"
            />
            <div
              className="hamburger"
              onClick={this.onShownChange}
            >
              <span className="bread"></span>
              <span className="meat"></span>
              <span className="bread"></span>
            </div>
            <ul className="header-menu">
              {routes.map(route => (
                <li
                  key={route.path}
                  className="header-menu__item"
                >
                  <Link
                    to={route.path}
                    className="header-menu__link"
                  >
                    {t(route.name)}
                  </Link>
                </li>
              ))}
            </ul>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                <main className="main">
                  {/* <Component /> */}
                </main>
              </Route>
            ))}
          </nav>
        </header>
      </Router>
    );
  }
}

export default Header;
