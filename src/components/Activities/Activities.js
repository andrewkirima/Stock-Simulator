import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import StopWatch from '../StopWatch/StopWatch';
// import Clock from 'react-digital-clock';
import stalkLogo from '../../assets/stalkLogo.png'
import './Activities.css'
class Activities extends React.Component {
    constructor() {
        super();
        this.state = {
            currentDate: Date().toLocaleString()
        };
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col style={{paddingLeft: '50px', paddingBottom: '30px'}}>
                        <h1 className="stalk">STALK</h1>
                        {/* <div className="clock">
                        <Clock />
                        </div> */}
                    </Col>
                    {/* <Col>
                        <p>{this.state.currentDate}</p>
                    </Col> */}
                    <Col style={{paddingLeft: '50px'}}>
                        <img class="App-logo" src={stalkLogo} />
                        <p className="row1">Good Day, John</p>
                        <StopWatch start={Date.now()}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Activities;