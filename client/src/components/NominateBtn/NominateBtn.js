import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { TrophyFill } from 'react-bootstrap-icons';
import './NominateBtn.css';

function NominateBtn(props) {
    return (
        <div className="nominateBanner">
            <Row>
                <Col className="movieTitle">
                    {props.title}  ({props.year})
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className="nominateBtn" onClick={() => props.nominateMovie(props.movie)}>
                        <span className="mr-2" >Nominate</span> 
                        <TrophyFill />
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default NominateBtn;
