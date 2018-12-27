import React, { Component } from 'react';
import './App.scss';
import Breadcrumbs from './Components/Breadcrumbs/Breadcrumbs';
import Filters from './Components/Filters/Filters';
import Header from './Components/Header/Header';

class App extends Component {

  render() {
    return (
      <div className="row global__container">
        <div className="large-12 columns">
          <div className="header-container">
            <Breadcrumbs />
            <Header />
          </div>
          <Filters />
        </div>
      </div>
    );
  }
}

export default App;
