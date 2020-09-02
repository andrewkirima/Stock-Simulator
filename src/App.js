import React, { Component } from 'react';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import DashBoard from './components/DashBoard/DashBoard';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notfound from './Notfound';
import './App.css';

class App extends Component { 
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    console.log("in handle login:  ")
    this.setState({
      isLoggedIn: true     
    });
  }

  render() {
  return (
    <Router>  
    <Switch>
      <Route exact path={"/"}
            render={props => (
              <Login
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                handleLogin={this.handleLogin}
              />
            )}
      />
      <Route exact path="/signup" component={Signup} />
      {/* {this.state.isLoggedIn &&  */}
      <Route exact path="/dashboard" component={DashBoard} />
      {/* } */}
      <Route component={Notfound}/>
    </Switch>
  </Router>
 
  );
  }
}


export default App;



