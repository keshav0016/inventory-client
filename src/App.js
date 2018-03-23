import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Homepage from './Homepage';
import LoginForm from './LoginForm';
import Adminhomepage from './Adminhomepage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Link to="/"></Link>
        
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/loginform" component={LoginForm}/>
        <Route exact path="/adminhomepage" component={Adminhomepage} />
        </div>
      </Router>
    );
  }
}

export default App;
