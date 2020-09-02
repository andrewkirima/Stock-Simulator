import React from 'react'
import Logo from './components/Logo/logo'

const Notfound = () => {
    return (
        <div style={{color:'white'}}>
                <div className='message'>
                    <h1>Error 404 </h1> 
                    <p>The requested URL /404 was not found on this server. Please try another valid url.</p>
                </div>
        </div>
        
    )
}

export default Notfound