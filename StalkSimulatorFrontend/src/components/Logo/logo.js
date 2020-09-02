import React, { Component } from 'react';
import Stalk from '../Logo/Stalk.svg';

import './logo.css';

class Logo extends Component { 
  render() {
    return (
        <div className="logo">
            <img className='img' src={Stalk} alt="Stalk Logo" />
        </div>
     
    );
  }
}

export default Logo;