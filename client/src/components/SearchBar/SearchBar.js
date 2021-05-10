import React from 'react';
import { Row, Col, Form ,FormControl, Card, FormLabel } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { Search } from 'react-bootstrap-icons'
import './SearchBar.css'


function SearchBar(props) {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Form>
                            <Form.Group>
                                <FormLabel className="movieTitleSearch">Movie Title</FormLabel>
                                <InputGroup className="movieSearch">
                                    <FormControl value={props.value} placeholder="Search for Movies Here" onChange={props.onChange} />
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default SearchBar;
