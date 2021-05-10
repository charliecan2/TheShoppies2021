import React from 'react';
import { Card } from 'react-bootstrap';
import Overlay from '../Overlay/Overlay';
import './Nominees.css'

function Nominees(props) {
    return (
        <div className="d-flex">
            {!props.nominees.length ? 
            <Card className="noNomineesCard">
                <Card.Title className="noNominees">
                No movies nominated yet. Search for Movies, and click on the "Nomiate" button to nominate!
                </Card.Title>
            </Card> :
            <div />
            }
            {props.nominees.map((nominee, index) => 
                <div className="image-container justify-content-start m-3">
                    <img src={nominee.Poster} alt="moviePoster"/>
                    <div className="d-flex align-items-center overlay justify-content-center"><Overlay nominee={nominee} removeNomination={props.removeNomination}/></div>
                </div>
            )} 
        </div>
    )
}

export default Nominees
