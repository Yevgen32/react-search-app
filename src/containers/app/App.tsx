import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../header/header';
import SearchScreen from '../search/search-screen';

import './App.css';

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Header />

        <div className="container-content">
          <Switch>
            <Route exact path="/react-search-app" component={SearchScreen} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
