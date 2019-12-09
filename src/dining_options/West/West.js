import  React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../../App.css';

class West extends Component {
    render() {
        return(
            <div>
                <span>
                    <Link className='back-button' to='/'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        Locations
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                </span>
                <h4 className='section-title'>
                    West
                </h4>
                <ListGroup>
                    <ListGroupItem><Link className='page-navigation' to='/West/TheWestWing'>The West Wing</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/West/WaringSquare'>Waring Square</Link></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default West;
