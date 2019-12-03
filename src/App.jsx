// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './containers/MainPage';

function App(props) {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
