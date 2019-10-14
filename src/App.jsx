import React, { Component, Suspense } from 'react';
import ReactDOM from 'react-dom';

import './sass/main.scss';

import './i18n';
import { withTranslation } from 'react-i18next';
import Header from './Components/Header.jsx';

const HeaderTranslated = withTranslation()(Header);

export class App extends Component {
  render() {
    return (
      <Suspense fallback={null}>
        <HeaderTranslated />
      </Suspense>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
