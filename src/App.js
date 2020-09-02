import React, { Component } from 'react';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import DashBoard from './components/DashBoard/DashBoard'
import { BrowserRouter as Router, Route } from "react-router-dom";

//import './App.css';

class App extends Component { 
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this); 
  }
  handleLogin() {
    console.log("in handle login:  ")
    this.setState({
      isLoggedIn: true     
    });
  }

  handleLogout() {
    console.log("in logout");
    this.setState({

      isLoggedIn: false
    });
  }
 
  render() {
  return (
    <Router>  
    <div className="App">
      <Route
              exact
              path={"/"}
              render={props => (
                <Login
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                />
              )}
       />
      <Route path="/signup" exact component={Signup} />
      {/* {this.state.isLoggedIn &&  */}
       <Route path="/dashboard" exact component={DashBoard} />
      {/* } */}
    </div>
  </Router>
  );
  }
}


export default App;



