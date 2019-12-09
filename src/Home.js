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
                    <ListGroupItem><Link className='page-navigation' to='/North'>North</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/South'>South</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/East'>East</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/West'>West</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/Pollock'>Pollock</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/Hub'>HUB Dining</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/CafeLaura'>Cafe Laura</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/Saxbys'>Saxbys</Link></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default Home;
