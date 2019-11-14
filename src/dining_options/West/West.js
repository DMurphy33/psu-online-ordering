import  React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class West extends Component {
    render() {
        return(
            <ListGroup>
                <ListGroupItem><a href='/West/TheWestWing'>The West Wing</a></ListGroupItem>
                <ListGroupItem><a href='/West/WaringSquare'>Waring Square</a></ListGroupItem>
            </ListGroup>
        )
    }
}

export default West;
