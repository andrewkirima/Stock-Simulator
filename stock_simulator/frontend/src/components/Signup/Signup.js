import React, { Component } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const url = 'http://localhost:8080/users/add'  //change this to new REST endpoint

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
          headers: { 'Content-Type': 'application/json', 'mode': 'no-cors' },
          body: JSON.stringify(this.state)
      };

      fetch(url,requestOptions)
        .then(response => {
          return response.json();
        })
        .then(data =>  {
          console.log('Request successful', data);
          this.setState({ newUserID: data.id , signedUp: true});
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
        if(this.state.signedUp){
            return (
              <div className= "afterSignup">
                  <h4>Hello {this.state.firstName} Your User ID is {this.state.newUserID}</h4>
                  <h4><Link to="/">Click here to login</Link></h4>
              </div>
            )
        }
        if(!this.state.signedUp) {
          return (
              <div className="hello">
                <div className="signupTag">Signup</div>
                <div className="containerSignup">
                    <form  onSubmit={this.handleSubmit}>
                      <label>First Name</label>
                      <input type="text" name="firstName" required value={firstName} onChange={this.handleChange}/>
                      <label>Last Name</label>
                      <input type="text" name="lastName" required value={lastName} onChange={this.handleChange}/>
                      <label>Email</label>
                      <input type="text" name="email" required value={email} onChange={this.handleChange}/>
                      <label>Password</label>
                      <input type="password" name="password" required value={password} onChange={this.handleChange}/>
                      <label>Confirm Password</label>
                      <input type="password" name="password2" required value={password2} onChange={this.handleChange}/>
                      
                      
                      <div className="lower">
                          <input type="submit" value="Signup"/>
                      </div>
                     </form>
                </div>
              </div>
          )
        }
    }
}

export default Signup;

