import React, { Component } from 'react';
import './App.css';
import materialize from 'materialize-css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import EmployeesList from './Employees';
// import $ from 'jquery';

class Adminhomepage extends Component {
  constructor(props){
    super(props)
    this.state = {
      employee: false
    }
   
    this.handleEmployee = this.handleEmployee.bind(this)
    
 
  }
  componentDidMount(){
    /* global $ */
    setTimeout(()=>{
      $(".button-collapse").sideNav();
    })
    
  }

  render() {

    return (
      <div>
        {this.state.employee?(
            <Redirect push to="/assets" />
          ) :(
        <div className="masterComponentBackground">
          <div >
            <nav className="masterComponentNavigationBar">
              <Link to="/"><a className="btn-flat waves-effect wave-teal white masterComponentLogoutButton">LOGOUT</a></Link>
              <a href="#" data-activates="slide-out" className="btn-flat waves-effect white button-collapse masterComponentMenuButton">
                  <i className="material-icons masterComponentMenuIcon">menu</i>
              </a>
              <div className="nav-wrapper">
                  <form>
                    <div className="input-field masterComponentSearchfield">
                      <input id="search" type="search" required />
                      <label className="label-icon"><i className="material-icons">search</i></label>
                    </div>
                  </form>
              </div>
              <ul id="slide-out" className="side-nav masterComponentSideBar">
                <li className="masterComponentSideBarItem"onClick={this.handleEmployee}><a href="/assets">Assets</a></li>
                <br />
                <li className="masterComponentSideBarItem" ><a href="#!">Consumables</a></li>
                <br />
                <li className="masterComponentSideBarItem" ><a href="#!">Employee</a></li>
              </ul>      
            </nav>
          </div>
        </div>
      )
    }
    </div>
  );
  }
  handleEmployee(){
    this.setState({
      employee: true
    })
  }
}

export default Adminhomepage;
