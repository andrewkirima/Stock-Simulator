import React from 'react';
import  { Link } from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Activities from '../Activities/Activities';
import UserProfile from '../UserProfile/UserProfile';
import StocksData from '../StocksData/StocksData';
import './DashBoard.css';


class DashBoard extends React.Component {
    render() {
        return (
            <div className='over'>
                    <Row>
                        <div className='one'>
                        <Col>
                            <Activities />
                        </Col>
                        </div>
                        <div className='two'>
                        <Col>
                            <StocksData />
                        </Col>
                        </div>
                       <div className='three'>   
                         <Col >
                            <UserProfile />
                        </Col>
                       </div>
                    </Row>
            </div>
        )
    }
}

export default DashBoard;