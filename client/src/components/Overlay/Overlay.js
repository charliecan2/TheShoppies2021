import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { XSquareFill } from 'react-bootstrap-icons'
import './Overlay.css';

function Overlay(props) {
    return (
        <div className="overlayBanner">
            <Row>
                <Col className="nomineeTitle">
                    {props.nominee.Title}  ({props.nominee.Year})
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className="removeBtn" onClick={() => props.removeNomination(props.nominee.imdbID)}>
                        <span className="mr-2">Remove</span>
                        <XSquareFill />
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Overlay
