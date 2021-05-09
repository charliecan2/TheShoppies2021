import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../src/components/Header/Header';
import SearchBar from '../src/components/SearchBar/SearchBar';
import SearchResults from '../src/components/SearchResults/SearchResults';
import Nominees from '../src/components/Nominees/Nominees';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios';

const App = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    searchMovie(search)
  }, [search])

  function onChange(event){
    const { value } = event.target;
    setSearch(value);
  }

  const searchMovie = async (search) => {
    await axios.get(`https://www.omdbapi.com/?s=${search}&type=movie&apikey=a1e90d82`)
    .then(res => {
      if(res.data.Search){
        setSearchResults(res.data.Search)
      }
    })
    .catch(err => console.log(err))
  };

  return (
    <Container fluid className="movieApp">
      <Header />
      <SearchBar 
      onChange={onChange}
      searchMovie={searchMovie}
      value={search}
      />
      <Row>
        <SearchResults movies={searchResults} />
      </Row>
      <Row>
          <Col>
            <Nominees />
          </Col>
      </Row>
    </Container>
  );
}

export default App;
