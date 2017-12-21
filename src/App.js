import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';
import { SUCCESSFUL_LOGIN } from './actionTypes.js'

//var store = createStore();
// var Provider = ReactRedux.Provider;
// var connect = ReactRedux.connect;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      savedUsername: 'Cormac',
      savedPassword: 'Test',
      loggedIn: false
    };
  }

  onUserDataChange = (e) => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <LoginForm {...this.state} onUserDataChange = {this.onUserDataChange}/>
      </div>
    );
  }
}


// const mapStateToProps = (state, ownProps) => ({
//   state.loggedIn;
// })

class LoginForm extends Component{
  constructor(props){
    super(props);
  }

  handleChange = (e) => {
    this.props.onUserDataChange(e);
  }

  handleSubmit = (e) => {
    this.checkCredentials();
    e.preventDefault();
  }

  checkCredentials = () => {
    let loginPassed = (this.props.username === this.props.savedUsername) && (this.props.password === this.props.savedPassword);
    console.log(loginPassed);
    console.log(this.state);
    this.setState({loggedIn: loginPassed});
  }

  logout = () => {
    this.setState({loggedIn: false,
                  username: '',
                  password: ''
                });
    document.getElementById("login-form").reset();
  }

  render(){
    return (
      <form id = "login-form" onSubmit = {this.handleSubmit}>
        <Greeting username = {this.props.username} loggedIn = {this.props.loggedIn}/>
        <TextInput name="username" type="text" value = {this.props.username} onKeyUp = {this.handleChange} />
        <TextInput name="password" type="password" value = {this.props.password} onKeyUp = {this.handleChange}/>
        <SubmitButton loggedIn = {this.props.loggedIn} onClick = {this.logout}/>
      </form>
    )
  }
}

class Greeting extends Component{
  render(){
    let name; 
    name = this.props.username.length > 0 ? this.props.username : 'guest';
    let loggedIn = this.props.loggedIn ? ' ' : 'not';
    return(
      <h1> Hello, {name}! You are {loggedIn} logged in.</h1>
    ) 
  }
}

class TextInput extends Component{
  constructor(props){
    super();
    this.state = {
      value: ''
    };
  }

  render(){
    return(
      <input type={this.props.type} 
        name = {this.props.name} 
        placeholder = {`Please enter ${this.props.name}`} 
        onKeyUp = {this.props.onKeyUp} />
      )
  }
}

class SubmitButton extends Component{
  render(){
    return this.props.loggedIn ?
      (<input type = "button" value = "Logout" onClick = {this.props.onClick} />):
      (<input type = "submit" value= "Submit"/>);
  }
}



export default App;
