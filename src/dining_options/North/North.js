import  React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../../App.css';

class North extends Component {
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
                    North
                </h4>
                <ListGroup>
                    <ListGroupItem><Link to='/North/Northside'>Northside</Link></ListGroupItem>
                    <ListGroupItem><Link to='/North/WorldBeat'>World Beat</Link></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default North;