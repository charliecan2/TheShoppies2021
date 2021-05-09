import React from 'react';
import './SearchResults.css';

function SearchResults(props) {
    return (
        <div className="d-flex">
            {props.movies.map((movie, index) => 
                <div className="justify-content-start m-3">
                    <img src={movie.Poster} alt="moviePoster"/>
                </div>
            )} 
        </div>

    )
}

export default SearchResults;