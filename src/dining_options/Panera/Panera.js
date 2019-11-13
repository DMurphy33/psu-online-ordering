import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Panera extends Component {
    render() {
        return(
            <ListGroup>
                <ListGroupItem><a href='/Panera/LewisKatzPanera'>Panera at the Lewis Katz Building</a></ListGroupItem>
                <ListGroupItem><a href='/Panera/OttosCafePanera'>Panera at Otto's Cafe</a></ListGroupItem>
                <ListGroupItem><a href='/Panera/ReesesCafePanera'>Panera at Reese's Cafe</a></ListGroupItem>
                <ListGroupItem><a href='/Panera/ZollerGalleryPanera'>Panera at the Zoller Gallery</a></ListGroupItem>
            </ListGroup>
        )
    }
}

export default Panera;
