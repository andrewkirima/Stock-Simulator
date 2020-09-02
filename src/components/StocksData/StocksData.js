import React from 'react';
import Stock from './Stock';

class StocksData extends React.Component {
    render() {
        return (
            <div class='containerStock'>
                <div>
                <h1 style={{fontFamily:'Verdana', paddingLeft: '40%'}}>Stocks Data</h1>
                <Stock />
                </div>
            </div>
            
        )
    }
}

export default StocksData;

