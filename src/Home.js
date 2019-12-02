import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './App.css';

class Home extends Component {
    render() {
        return(
            <div>
                <h4 className='section-title'>
                    Locations
                </h4>
                <ListGroup>
                    <ListGroupItem><Link to='/North'>North</Link></ListGroupItem>
                    <ListGroupItem><Link to='/South'>South</Link></ListGroupItem>
                    <ListGroupItem><Link to='/East'>East</Link></ListGroupItem>
                    <ListGroupItem><Link to='/West'>West</Link></ListGroupItem>
                    <ListGroupItem><Link to='/Pollock'>Pollock</Link></ListGroupItem>
                    <ListGroupItem><Link to='/Hub'>HUB Dining</Link></ListGroupItem>
                    <ListGroupItem><Link to='/CafeLaura'>Cafe Laura</Link></ListGroupItem>
                    <ListGroupItem><Link to='/Saxbys'>Saxbys</Link></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default Home;
