import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import StopWatch from '../StopWatch/StopWatch';
import stalkLogo from '../../assets/stalkLogo.png'
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
                    <Col style={{padding: '50px'}}>
                        <h1>STALK</h1>
                    </Col>
                    {/* <Col>
                        <p>{this.state.currentDate}</p>
                    </Col> */}
                    <Col style={{paddingLeft: '50px'}}>
                        <img class="App-logo" src={stalkLogo} />
                        <p style={{paddingTop: '10px'}}>Good Day, John</p>
                        <StopWatch start={Date.now()}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Activities;