import React from 'react';
import { Card } from 'react-bootstrap';
import './SearchResults.css';
import NominateBtn from '../NominateBtn/NominateBtn';

function SearchResults(props) {
    return (
        <div className="d-flex">
            {!props.movies.length ? 
            <Card className="noResultsCard">
                <Card.Title className="noResults">
                    No search results to display yet
                </Card.Title>
            </Card>
            :
            <div />
            }
            {props.movies.map((movie, index) => 
                <div className="image-container justify-content-start m-3">
                    <img src={movie.Poster} alt="moviePoster"/>
                    <div className="d-flex align-items-center overlay justify-content-center"><NominateBtn movie={movie} title={movie.Title} year={movie.Year} nominateMovie={props.nominateMovie}/></div>
                </div>
            )} 
        </div>
    )
}

export default SearchResults;