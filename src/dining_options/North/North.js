import  React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class North extends Component {
    render() {
        return(
            <ListGroup>
                <ListGroupItem><a href='/North/Northside'>Northside</a></ListGroupItem>
                <ListGroupItem><a href='/North/WorldBeat'>World Beat</a></ListGroupItem>
            </ListGroup>
        )
    }
}

export default North;