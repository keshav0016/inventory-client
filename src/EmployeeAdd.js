import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import $ from 'jquery'


class EmployeeAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: '',
      name: '',
      password: '',
      department: '',
      role: 'employee'
    }
     this.handleAdd = this.handleAdd.bind(this)
     this.handleDepartment = this.handleDepartment.bind(this)
     this.handleName = this.handleName.bind(this)
     this.handlePassword = this.handlePassword.bind(this)
     this.handleUser_id = this.handleUser_id.bind(this)
     
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <script src="https://unpkg.com/jquery@2.2.1/dist/jquery.js"></script>
          <script type="text/javascript" src="js/materialize.min.js"></script>
         
        </header>
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
        <br/>
        <div class='container '>
        <div class="row">
          <form class="col s8">
            <div class="row">
              <div class="input-field col s4">
                <input  id="user_id" type="number" min='0' onChange={this.handleUser_id} />
                <label for="user_id" class='active'>user_id</label>
              </div>
              <div class="input-field col s8">
                <input id="name" type="text" class="validate" onChange={this.handleName}/>
                <label for="name" class='active'>name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s8">
                <input id="password" type="password" class="validate" onChange={this.handlePassword}/>
                <label for="password" class='active'>Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s4">
                <input value="employee" type="text" class="validate" />
                <label class="active" >role</label>
              </div>
            </div>
            <div class='row'>
            <div class="input-field col  s8">
              <select id='options' value={this.state.department}onChange={this.handleDepartment}>
                <option value="" disabled selected>Choose department</option>
                <option value="intern">intern</option>
                <option value="full time">full time</option>
                <option value="part time">part time</option>
              </select>
              <label >department</label>
              
            </div>  
            </div>
            <a class="waves-effect waves-light btn" onClick={this.handleAdd}>Add</a>

          </form>
        </div>
        </div>
      </div>
      </div>

    )
  }
  handleDepartment(event){
    this.setState({
      department:event.target.value
    })
  }
  handleName(event){
    this.setState({
      name:event.target.value
    })
  }
  handlePassword(event){
    this.setState({
      password:event.target.value
    })
  }
  handleUser_id(event){
    user_id:event.target.value
  }
  handleAdd(){
    axios({
      method: 'post',
      url: 'http://localhost:3001/employee/create',
      data:{
        user_id:this.state.user_id,
        name:this.state.name,
        password:this.state.password,
        role:'employee',
        department:this.state.department
      },
      withCredentials: true
    })
    .then((res)=>{
      if(res.data.message==='employee created'){
        alert('employee added')
      }else{
        alert('employee cannot be created ')
      }
      this.setState({
        user_id:'',
        name:'',
        password:'',
        department:''
      })
     
    })
  }

}



export default EmployeeAdd