import React from 'react';
import { Row, Col, Form ,FormControl, Card, FormLabel, Button } from 'react-bootstrap';
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
                            <Form.Group className="formInput">
                                <FormLabel className="movieTitleSearch">Movie Title</FormLabel>
                                <InputGroup className="movieSearch">
                                    <Search className="searchIcon" />
                                    <FormControl className="movieInput" placeholder="Search for Movies Here" onChange={props.onChange} />
                                </InputGroup>
                            </Form.Group>
                        </Form>
                        <Button onClick={props.searchMovie}>Search</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default SearchBar;
