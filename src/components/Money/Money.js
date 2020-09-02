import React from 'react';

class Money extends React.Component {
    render() {
        let initialMoney = 100;
        let earnedToday = 45;

        return (
            <div style={{padding: '50px'}}>
                <div>
                    <h3>Wallet</h3>
                    <h4>{initialMoney}$</h4>
                </div>
                <hr/>
                <div>
                    <h3>Earned Today</h3>
                    <h4>{earnedToday}$</h4>
                </div>
            </div>

           
        )
    }
}

export default Money;