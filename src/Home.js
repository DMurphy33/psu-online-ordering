import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Home extends Component {
    render() {
        return(
            <ListGroup>
                <ListGroupItem><a href='/North'>North</a></ListGroupItem>
                <ListGroupItem><a href='/South'>South</a></ListGroupItem>
                <ListGroupItem><a href='/East'>East</a></ListGroupItem>
                <ListGroupItem><a href='/West'>West</a></ListGroupItem>
                <ListGroupItem><a href='/Hub'>HUB</a></ListGroupItem>
            </ListGroup>
        )
    }
}

export default Home;