import React, {Component} from 'react';
import StockList from './StockListings';

const url = "http://localhost:6700/stocks"; //temp url hosting on json server

class Stocks extends Component { //class component
    constructor(){ //initialized the component
        super()
        this.state ={ //state 
            stocks: ''
        }
    }
    componentDidMount(){ 
        fetch(url,{method:'GET'})  
        .then((response) => response.json())
        .then((data) => { 
            this.setState({ 
                stocks:data
            })
        })
    }
    render(){ 
        console.log(this.state.stocks); 
        return( 
            <div>
                <StockList stockList={this.state.stocks}/>
            </div>
        )
    }
}

export default Stocks;