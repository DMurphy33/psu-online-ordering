import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

class Panera extends Component {
    render() {
        return(
            <div>
                <span>
                    <a className='back-button' href='/'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        Locations
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </a>
                </span>
                <h4 className='section-title'>
                    Panera
                </h4>
                <ListGroup>
                    <ListGroupItem><a href='/Panera/LewisKatzPanera'>Panera at the Lewis Katz Building</a></ListGroupItem>
                    <ListGroupItem><a href='/Panera/OttosCafePanera'>Panera at Otto's Cafe</a></ListGroupItem>
                    <ListGroupItem><a href='/Panera/ReesesCafePanera'>Panera at Reese's Cafe</a></ListGroupItem>
                    <ListGroupItem><a href='/Panera/ZollerGalleryPanera'>Panera at the Zoller Gallery</a></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default Panera;
