import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class East extends Component {
    render() {
        return(
            <div>
                <ListGroup>
                    <ListGroupItem><a href='/East/Bowls'>Bowls</a></ListGroupItem>
                    <ListGroupItem><a href='/East/ChefsTable'>Chef's Table</a></ListGroupItem>
                    <ListGroupItem><a href='/East/EastCommons'>East Commons</a></ListGroupItem>
                    <ListGroupItem><a href='/East/Deli'>Deli</a></ListGroupItem>
                    <ListGroupItem><a href='/East/Edge'>Edge</a></ListGroupItem>
                    <ListGroupItem><a href='/East/Pasta'>Pasta</a></ListGroupItem>
                    <ListGroupItem><a href='/East/Pizza'>Pizza</a></ListGroupItem>
                    <ListGroupItem><a href='/East/Salad'>Salad</a></ListGroupItem>
                    <ListGroupItem><a href='/East/Flipps'>Flipps</a></ListGroupItem>
                    <ListGroupItem><a href='/East/Pure'>Pure</a></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default East;
