import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import EmployeeAdd from './EmployeeAdd'
import {Modal, Button, Table, Input, Row, Dropdown, NavItem,Icon,T } from 'react-materialize'


class EmployeesList extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      add:false,
      first_name: '',
      last_name: '',
      password: '',
      age: '',
      gender: '',
      department: '',
      designation: ''
    }
    this.handleList = this.handleList.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleAge = this.handleAge.bind(this)
    this.handleDepartment = this.handleDepartment.bind(this)
    this.handleDesignation = this.handleDesignation.bind(this)
    this.handleFirstname = this.handleFirstname.bind(this)
    this.handleLastname = this.handleLastname.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    
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
  handleCreate(){
    axios({
      method: 'post',
      url: 'http://localhost:3001/employee/create',
      data:{
        first_name:this.state.first_name,
        last_name:this.state.last_name,
        password:this.state.password,
        age:this.state.age,
        department:this.state.department,
        designation:this.state.designation
      },
      withCredentials: true
    })
    .then((res)=>{
      if(res.data.message === 'employee created'){
      alert('employee created')
      }else{
        alert('error')
        console.log(res.data)
      }
    })
  }
  handleFirstname(e){
    this.setState({
    first_name: e.target.value
      
    })
  }
  handleLastname(e){
    this.setState({
    last_name: e.target.value
      
    })
  }
  handleAge(e){
    this.setState({
    age: e.target.value
      
    })
  }
  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  }
  handleDepartment(e){
    this.setState({
    department: e.target.value
      
    })
  }
  handleDesignation(e){
    this.setState({
    designation: e.target.value
      
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
        <script src="path/to/your/bundle.js"></script>
        </header>
        {this.state.add?(<Redirect push to="/employee/add" />):(
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
                  <li className="masterComponentSideBarItem" ><a href="/employee">Employee</a></li>
                  <br />
                  <br />
                </ul>      
              </nav>
            </div>
            <br/>
            <br/>
            <br/>
            <h4>Employees List</h4>
            <Modal
               header='Employee Add Form'
               trigger={<Button floating large className='red' waves='light' icon='add' />}>
               <Row>
               <Input placeholder="first name" onChange={this.handleFirstname}s={6} label="First Name" />
               <Input placeholder="last name" onChange={this.handleLastname} s={6}label="Last Name" />
               <Input type="password" placeholder="password"label="password"onChange={this.handlePassword} s={6} />
               <Input type="number"placeholder="age" label="age" onChange={this.handleAge}s={6} />
               {/* <Input s={12} type='select' label="gender" defaultValue=''>
                 <option value='Male'>Male</option>
                 <option value='3'>Option 3</option>
               </Input> */}
               <Input type="text" placeholder="department"label="department" onChange={this.handleDepartment}s={6} />
               <Input type="text" placeholder="designation"label="designation"onChange={this.handleDesignation} s={6} />
               </Row>
               <Button onClick={this.handleCreate}>Add</Button>
              
            </Modal>
            <Table class='container'>
              <thead>
                <tr>
                <th data-field="id">id</th>
                  <th data-field="first_name">First Name</th>
                  <th data-field="last_name">Last Name</th>
                  <th data-field="age">Age</th>
                  <th data-field="gender">Gender</th>
                  <th data-field="department">department</th>
                  <th data-field="designation">designation</th>
                </tr>
              </thead>

              <tbody>{this.state.data.map(function (item,key){
                return(
                <tr>
                  <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.department}</td>
                <td>{item.designation}</td>
                {/* <td><Dropdown trigger={
                    <Button>Drop me!</Button>
                  }>
                  <NavItem>one</NavItem>
                  <NavItem>two</NavItem>
                  <NavItem divider />
                  <NavItem>three</NavItem>
                </Dropdown></td> */}
              </tr>
                )
              })}
              </tbody>
            </Table>
            {this.handleList()}
          </div >
         
        )}
         
          
      </div>
       
    );
  }
}

export default EmployeesList;