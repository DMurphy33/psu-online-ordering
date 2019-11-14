import  React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

class West extends Component {
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
                    West
                </h4>
                <ListGroup>
                    <ListGroupItem><a href='/West/TheWestWing'>The West Wing</a></ListGroupItem>
                    <ListGroupItem><a href='/West/WaringSquare'>Waring Square</a></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default West;
