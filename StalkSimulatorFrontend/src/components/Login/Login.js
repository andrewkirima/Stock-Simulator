import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from "react-router-dom";
import './Login.css';
import stalkLogo from './stalkLogo.png'
import Logo from '../Logo/logo'

const url = 'http://localhost:8000/login'  //change this to new REST endpoint

class Login extends Component { // Class -> Stateful Component
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            status: '400',
        };
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

       // this.setState({ found: this.state.found+1}); to test if routing works

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({"username": this.state.email, "password": this.state.password})
      };
      fetch(url,requestOptions)
        .then(response => {
          console.log(response.status);
          this.setState({ status: response.status })
          return response.json();
        })
        .catch(function(error) {
          console.log('Request failed', error)
        });
    }
    
    render() {
        const {email, password, status} = this.state;
        if(status == '400') {
            return (
                <div>
                <div className="logo">
                    <Logo />
                </div>
                <div className='notsignedin'>  
                <div className="imgLogo">
                    <img className='img' src={stalkLogo} alt="Stalk Logo" />
                    </div>
                <div className="bold">Login in!</div>
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
                <div className="haveanaccount">
                            <h5>Don't have an account? <Link className='linkto' to='./signup'>Signup here!</Link></h5>
                </div>
                </div>
            
                </div>
            );
        }
        if(status == 2) {
            return (
                <div className='notValidCreds'> 
                <div className="imgLogo">
                <img className='img' src={stalkLogo} alt="Stalk Logo" />
                </div>                    
                 <div className="notval"> Invalid Credentials </div>
                <div className="bold">Sign in</div>
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
            );
        }
        if(status == '200')
        {
            console.log('status is 200');
            return(
                <Redirect to={{
                    pathname: '/dashboard',   //Change pathname
                    // state: { name: this.state.name }
                }}/>
            );
        }
    }
}

export default Login;