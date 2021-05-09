import React from 'react'
import './Header.css'
import {Row, Col} from 'react-bootstrap'

function Header() {
    return (
        <Row>
            <Col>
                <h1 className="header">The Shoppies</h1>
            </Col>
        </Row>
    )
}

export default Header
