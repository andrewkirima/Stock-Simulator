import React, { Component } from 'react';
import './Signup.css';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import stalkLogo from './stalkLogo.png';
import Logo from '../Logo/logo'

const url = 'http://localhost:8000/account/register'  //change this to new REST endpoint

class Signup extends Component { // Class -> Stateful Component
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password2: '',
            newUserID: '',
            signedUp: false

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
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({'username':this.state.email, 
                                'first_name': this.state.firstName,
                                'last_name': this.state.lastName,
                                'password': this.state.password,
                                'email': this.state.email})
      };

      fetch(url,requestOptions)
        .then(response => {
          return response.json();
        })
        .then(data =>  {
          this.setState({ newUserID: data.email , signedUp: true});
        })
        .catch(function(error) {
          console.log('Request failed', error)
        });
     
    }
    handleSelectValue = event => {
      this.setState({
        selectedValue: event.target.value
      });
    };
    render() {
        const {firstName, lastName, email, password, password2} = this.state;
        if(!this.state.signedUp) {
          return (
              <div className="hello">
                <div className="logo">
                  <Logo />
              </div>
                <div className="containerSignup">
                <div className="imgLogo">
                <img className='img' src={stalkLogo} alt="Stalk Logo" />
                </div>
                <div className="signupTag">Create an account.</div>
                    <form  onSubmit={this.handleSubmit}>
                      <label>First Name</label>
                      <input type="text" name="firstName" required value={firstName} onChange={this.handleChange}/>
                      <label>Last Name</label>
                      <input type="text" name="lastName" required value={lastName} onChange={this.handleChange}/>
                      <label>Email</label>
                      <input type="text" name="email" required value={email} onChange={this.handleChange}/>
                      <label>Passoword</label>
                      <input type="password" name="password" required value={password} onChange={this.handleChange}/>
                      <label>Confirm Passoword</label>
                      <input type="password" name="password2" required value={password2} onChange={this.handleChange}/>
                      
                      
                      <div className="lower">
                          <input type="submit" value="Signup"/>
                      </div>

                      <div className="donthaveanaccount">
                        <h5>Already have an account? <Link className='link' to='./'>Login here!</Link></h5>
                      </div>
                     </form>
                </div>
              </div>
          )
        }
        else {
          return(
            <Redirect to={{
                pathname: '/'
            }}/>
        );
        }
    }
}

export default Signup;

