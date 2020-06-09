import React from 'react';

import './App.css';
import PageOne from './components/Page1/PageOne'
import PageTwo from './components/Page2/PageTwo'
import SignUpPage from './components/SignupPage/SignUpPage'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={PageOne} />
          <Route path="/signup/" exact component={SignUpPage} />
          <Route path="/home/" exact component={PageTwo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
