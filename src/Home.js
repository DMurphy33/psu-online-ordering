import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './App.css';

class Home extends Component {
    render() {
        return(
            <div>
                <h4 className='section-title'>
                    Locations
                </h4>
                <ListGroup>
                    <ListGroupItem><a href='/North'>North</a></ListGroupItem>
                    <ListGroupItem><a href='/South'>South</a></ListGroupItem>
                    <ListGroupItem><a href='/East'>East</a></ListGroupItem>
                    <ListGroupItem><a href='/West'>West</a></ListGroupItem>
                    <ListGroupItem><a href='/Pollock'>Pollock</a></ListGroupItem>
                    <ListGroupItem><a href='/Hub'>HUB Dining</a></ListGroupItem>
                    <ListGroupItem><a href='/CafeLaura'>Cafe Laura</a></ListGroupItem>
                    <ListGroupItem><a href='/Saxbys'>Saxbys</a></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default Home;
