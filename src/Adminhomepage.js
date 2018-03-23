import React, { Component } from 'react';
import './App.css';
import materialize from 'materialize-css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import $ from 'jquery';

class Adminhomepage extends Component {
  componentDidMount() {
    /* global $ */
    setTimeout(()=>{
      $(".button-collapse").sideNav();
    })
  }

  render() {

    return (
      <div>
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
                <li className="masterComponentSideBarItem"><a href="#!">Assets</a></li>
                <br />
                <li className="masterComponentSideBarItem"><a href="#!">Consumables</a></li>
                <br />
                <li className="masterComponentSideBarItem"><a href="#!">Employee</a></li>
                <br />
                <li className="masterComponentSideBarItem"><a href="#!">History</a></li>
                <br />
              </ul>      
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Adminhomepage;
