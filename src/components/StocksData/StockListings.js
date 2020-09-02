import React from 'react';

const StockList = (stockList) => { //functional component

    const renderList = ({stockList}) => { 
        if(stockList){
            return stockList.map((data) => {  
                return( 
                        <div className="rowCard">
                            {data.name} 
                            <div>
                            ${data.price} 
                            </div>
                            
                        </div>
                )  
            })
        }  
    }
    return( 
        <div className="container">
            <div  className="rowCard">
                {renderList(stockList)}  
            </div>
        </div>
    )
}

export default StockList;