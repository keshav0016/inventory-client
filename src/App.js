import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Homepage from './Homepage';
import LoginForm from './LoginForm';
import Adminhomepage from './Adminhomepage';
import EmployeesList from './Employees';
import EmployeeAdd from './EmployeeAdd';
import Assets from './Assets'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Link to="/"></Link>
        <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/loginform" component={LoginForm}/>
        <Route exact path="/adminhomepage" component={Adminhomepage} />
        <Route exact path="/employee" component={EmployeesList}/>
        <Route exact path="/employee/add" component={EmployeeAdd}/>
        <Route exact path="/assets" component={Assets}/>
        
        
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
