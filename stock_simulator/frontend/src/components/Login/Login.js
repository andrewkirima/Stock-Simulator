import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from "react-router-dom";
import { render } from "react-dom";

import './Login.css';
const url = 'http://localhost:8080/login/validate'  //change this to new REST endpoint

class Login extends Component { // Class -> Stateful Component
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            found: 0,
        };
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'mode': 'no-cors' },
          body: JSON.stringify(this.state)
      };
      fetch(url,requestOptions)
        .then(response => {
          return response.json();
        })
        .then(data =>  {
          this.setState({ found: data.found});
          this.props.handleLogin();
        })
        .catch(function(error) {
          console.log('Request failed', error)
        });
    }
    
    render() {
        const {email, password, found} = this.state;
        if(found == 0) {
        return (
            <div className='notsignedin'>
            <div className="bold">Login</div>
            <div className="container">
                <form  onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="text" name="email" required value={email} onChange={this.handleChange}/>
                    <label>Password</label>
                    <input type="password" name="password" required value={password} onChange={this.handleChange}/>
                    <div className="lower">
                        <input type="submit" value="Login"/>
                    </div>
                </form>
            </div>
            </div>
            )
        }
        if(found == 2) {
            return (
                <div>
                 <div className="notval"> Invalid Credentials </div>
                <div className="bold">Login</div>
                <div className="container">
                    <form  onSubmit={this.handleSubmit}>
                        <label>Email</label>
                        <input type="text" name="email" value={email} onChange={this.handleChange}/>
                        <label>Password</label>
                        <input type="password" name="password" value={password} onChange={this.handleChange}/>
                        <div className="lower">
                            <input type="submit" value="Login"/>
                        </div>
                    </form>
                </div>
                </div>
                )
            }
        if(found == 1)
        {
            return(
                <Redirect to={{
                    pathname: '/Dashboard/Dashboard',   //Change pathname
                    state: { email: email }
                }}/>
            )
        }
//        return(<h1>Working it is.</h1>)
    }
}

export default Login;
render(<Login />, document.getElementById("app"));