import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from '../navigation/navigation';
import SearchScreen from '../search/search-screen';

import './App.css';

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Navigation />

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
