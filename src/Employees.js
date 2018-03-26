import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import materialize from 'materialize-css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import EmployeeAdd from './EmployeeAdd'

class EmployeesList extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      add:false
    }
    this.handleList = this.handleList.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }
  componentWillMount(){
    this.handleList()
  }
  handleList(){
    axios({
      method: 'get',
      url: 'http://localhost:3001/employee/list',
      withCredentials: true
    })
    .then((res) => {
      this.setState({
        data: res.data.user
      })
      console.log(res)
    })
    .catch(error => {
      alert('list not found')
    })
  }
  handleAdd(){
   this.setState({
     add: true
   })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <script src="https://unpkg.com/jquery@2.2.1/dist/jquery.js"></script>
          <script type="text/javascript" src="js/materialize.min.js"></script>
        </header>
        {this.state.add?(<Redirect from='/employee' to="/employee/add" />):(
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
                  <li className="masterComponentSideBarItem"><a href="/employee">Consumables</a></li>
                  <br />
                  <li className="masterComponentSideBarItem" ><a href="#!">Employee</a></li>
                  <br />
                  <li className="masterComponentSideBarItem"><a href="#!">History</a></li>
                  <br />
                </ul>      
              </nav>
            </div>
            <br/>
            <br/>
            <br/>
          
          <div class='container'>
          <div class=' table'>
            <table class='bordered'>
            <thead>
              <tr>
                <th>user_id</th>
                <th>Name</th>
                <th>department</th>
              </tr>
            </thead>
            <tbody>{this.state.data.map(function(item,key){
              return(
                <tr key={key}>
                <td>{item.user_id}</td>
                <td>{item.name}</td>
                <td>{item.department}</td>
                <td ><a class='dropdown-trigger btn-mini' href='#' data-target='dropdown1'><i class="material-icons">more_vert</i></a>

                <ul id='dropdown1' class='dropdown-content'>
                <li><a href="#!">update</a></li>
                <li><a href="#!">delete</a></li>
                <li><a href="#!">history</a></li>
                
                </ul>
          
                  
                      
              </td>
              </tr>
              )
            })}
            </tbody>
            </table>
              <a class="btn-floating btn-large waves-effect waves-light red" onClick={this.handleAdd}><i class="material-icons">add</i></a>
          </div >
          </div>
          </div>
        )}
      </div>
    );
  }
}

export default EmployeesList;
