import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class Header extends Component {
    render() {
        return(
            <Navbar className='nav'>
                <NavbarBrand className='nav-text' href='/'>PSU Online Ordering</NavbarBrand>
                <a href='/Checkout'>
                    <FontAwesomeIcon className='nav-text' icon={faShoppingCart} />
                    <span className='nav-text'>: 0 items</span>
                </a>
            </Navbar>
        )
    }
}

export default Header;