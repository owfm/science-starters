// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainPage from './containers/MainPage';

function App() {
  return (
    <Switch>
      <Route path='/'>
        <MainPage />;
      </Route>
      <Route path='/about'>
        <p>About page</p>
      </Route>
      <Route path='/editor'>
        <p>editor page</p>
      </Route>
    </Switch>
  );
}

export default App;
