import React, { Fragment, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../src/components/Header/Header';
import SearchBar from '../src/components/SearchBar/SearchBar';
import SearchResults from '../src/components/SearchResults/SearchResults';
import Nominees from '../src/components/Nominees/Nominees';
import axios from 'axios';

const App = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function onChange(event){
    const { value } = event.target;

    setSearch(value);
  }

  const searchMovie = async () => {
    await axios.get(`https://www.omdbapi.com/?s=${search}&type=movie&apikey=a1e90d82`)
    .then(res => {
      console.log(res.data.Search)
    })
    .then( console.log(searchResults))
    .catch(err => console.log(err))
  };

  return (
    <Fragment>
      <Container fluid="md">
        <Header />
        <SearchBar 
        onChange={onChange}
        searchMovie={searchMovie}
        />
        <Row>
          <Col>
            <SearchResults />
          </Col>
          <Col>
            <Nominees />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
