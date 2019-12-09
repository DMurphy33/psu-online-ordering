import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../../App.css';

class East extends Component {
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
                    East
                </h4>
                <ListGroup>
                    <ListGroupItem><Link className='page-navigation' to='/East/Bowls'>Bowls</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/East/ChefsTable'>Chef's Table</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/East/EastCommons'>East Commons</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/East/Deli'>Deli</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/East/Edge'>Edge</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/East/Pasta'>Pasta</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/East/Pizza'>Pizza</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/East/Flipps'>Flipps</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/East/Pure'>Pure</Link></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default East;
