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
  const [nominees, setNominees] = useState([]);

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

  const nominateMovie = async (movie) => {
    const nomineeList = [...nominees, movie]
    setNominees(nomineeList);
  }

  const removeNomination = (id) => {
    let filteredNominees = nominees.filter(nominee => {
      if (nominee.imdbID !== id){
        return nominee
      }
    });
    setNominees(filteredNominees);
  }

  return (
    <Container fluid className="movieApp">
      <Header />
      <SearchBar 
      onChange={onChange}
      value={search}
      />
      <Row>
        <Col>
          <h4 className="searchResultsHeader">Search Results</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <SearchResults 
          movies={searchResults}
          nominateMovie={nominateMovie}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="searchResultsHeader">Nominees</h4>
        </Col>
      </Row>
      <Row>
          <Col>
            <Nominees nominees={nominees} removeNomination={removeNomination}/>
          </Col>
      </Row>
    </Container>
  );
}

export default App;
