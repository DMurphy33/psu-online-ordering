import  React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

class North extends Component {
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
                    North
                </h4>
                <ListGroup>
                    <ListGroupItem><a href='/North/BluespoonMarket'>BluespoonMarket</a></ListGroupItem>
                    <ListGroupItem><a href='/North/Deli'>Deli</a></ListGroupItem>
                    <ListGroupItem><a href='/North/Grill'>Grill</a></ListGroupItem>
                    <ListGroupItem><a href='/North/Salad'>Salad</a></ListGroupItem>
                    <ListGroupItem><a href='/North/Northside'>Northside</a></ListGroupItem>
                    <ListGroupItem><a href='/North/WorldBeat'>World Beat</a></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default North;