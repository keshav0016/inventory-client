import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
// import materialize from 'materialize-css';

class LoginForm extends Component {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      shouldRedirect: false,
    }
    this.getUsername = this.getUsername.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.verifyCredentials = this.verifyCredentials.bind(this);
  }

  //function to fetch the username from the username textfield
  getUsername(event){
    this.setState({
      username:event.target.value
    })
  }

  //function to fetch the password from the password textfield
  getPassword(event){
    this.setState({
      password:event.target.value
    })
  }

  //function to check the credentials provided  by the user
  verifyCredentials(){
    if(this.state.username === 'admin' && this.state.password === 'admin'){
      this.setState({shouldRedirect: true})
      
    }
    else{
      console.log('Wrong');
    }

  }

  render() {

    return (
      <div>
        {
          this.state.shouldRedirect ?
          (
            <Redirect from='/loginform' to="/adminhomepage" />
          ) :
          (
            <div className="loginBackground">
              <div className="z-depth-4 loginForm">
                <div className="loginBanner">
                  <p className="loginBannerText">My Account</p>
                </div>
                <div className="loginFormIcon">
                  <i className="medium material-icons white-text">account_circle</i>
                </div>
                <div className="z-depth-4 loginFormCredentialContainer">
                  <div className="row loginFormUsernameMargin">
                    <div className="input-field col s12 loginFormUsernameFieldContainer">
                      <input type="text" onChange={this.getUsername}></input>
                      <label><i className="material-icons">account_box</i>Username</label>
                    </div>
                  </div>
                  <div className="row loginFormPasswordMargin">
                    <div className="input-field col s12 loginFormUsernameFieldContainer">
                      <input type="password" onChange={this.getPassword}></input>
                      <label><i className="material-icons">lock</i>Password</label>
                    </div>
                  </div>
                  <a className="btn waves-effect waves-teal loginFormButton z-depth-4" onClick={this.verifyCredentials}>LOGIN</a>
                </div>
              </div>
            </div>

          )
          
        }
        
      </div>
    );
  }
}

export default LoginForm;
