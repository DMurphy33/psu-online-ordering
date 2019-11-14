import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

class Pollock extends Component {
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
                    Pollock
                </h4>
                <ListGroup>
                    <ListGroupItem><a href='/Pollock/MarketPollockKitchen'>Market Pollock Kitchen</a></ListGroupItem>
                    <ListGroupItem><a href='/Pollock/MarketPollockStore'>Market Pollock Store</a></ListGroupItem>
                    <ListGroupItem><a href='/Pollock/PollockDiningCommons'>Pollock Dining Commons</a></ListGroupItem>
                    <ListGroupItem><a href='/Pollock/Edge'>Edge</a></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default Pollock;
