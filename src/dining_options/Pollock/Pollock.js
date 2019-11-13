import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Pollock extends Component {
    render() {
        return(
            <ListGroup>
                <ListGroupItem><a href='/Pollock/MarketPollockKitchen'>Market Pollock Kitchen</a></ListGroupItem>
                <ListGroupItem><a href='/Pollock/MarketPollockStore'>Market Pollock Store</a></ListGroupItem>
                <ListGroupItem><a href='/Pollock/PollockDiningCommons'>Pollock Dining Commons</a></ListGroupItem>
                <ListGroupItem><a href='/Pollock/Edge'>Edge</a></ListGroupItem>
            </ListGroup>
        )
    }
}

export default Pollock;
