import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
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
  const [disabled, setDisabled] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    searchMovie(search)
  }, [search])

  useEffect(() => {
    checkSavedNominees();
  }, [])

  const checkSavedNominees = () => {
    const savedNominees = JSON.parse(localStorage.getItem("nominee"));
    
    if (savedNominees){
      setNominees(savedNominees);
    }
    else {
      setNominees([])
    }
  }

  function onChange(event){
    const { value } = event.target;
    setSearch(value);
  }

  const searchMovie = (search) => {
    axios.get(`https://www.omdbapi.com/?s=${search}&type=movie&apikey=a1e90d82`)
    .then(res => {
      if(res.data.Search){
        setSearchResults(res.data.Search)
      }
    })
    .catch(err => console.log(err))
  };

  const nominateMovie = async (movie) => {
    if (nominees.length === 5){
      setShow(true)
    }
    else if (nominees.length < 5){
      const nomineeList = [...nominees, movie]
      setNominees(nomineeList);
      const disabledList = [...disabled, movie.imdbID]
      setDisabled(disabledList);
  
      localStorage.setItem("nominee", JSON.stringify(nomineeList));

      if (nominees.length === 4){
        setShow(true)
      }
    }
  }

  const removeNomination = (id) => {
    let filteredNominees = nominees.filter(nominee => {
      if (nominee.imdbID !== id){
        return nominee
      }
    });
    let filteredNomineesID = disabled.filter(disabledID => {
      if (disabledID !== id){
        return disabledID
      }
    })
    setDisabled(filteredNomineesID);
    setNominees(filteredNominees);
    localStorage.setItem("nominee", JSON.stringify(filteredNominees));
  }

  const handleClose = () => setShow(false);

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
          disabled={disabled}
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
      <Modal 
      show={show} 
      onHide={handleClose}
      keyboard={false}
      animation={true}
      >
        <Modal.Header>
          <Modal.Title>Max Nominees Reached</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Congratulations, you've finished nominating five movies for a Shoppy award! You won't be able to add any more to the list, but you can still change it by removing a movie and adding another.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Okay</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
