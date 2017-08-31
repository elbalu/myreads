import React from 'react';
import { Route } from 'react-router-dom';

import Search from './search';
import MyReads from './myReads';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Route exact path="/" component={ MyReads } />
      <Route exact path="/search" component={ Search } />
    </div>
  );
}

export default App;
