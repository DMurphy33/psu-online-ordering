import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

class Header extends Component {
    render() {
        let numItems = 0;
        for (let i=0; i<this.props.cart.length; i++) {
            numItems += this.props.cart[i].food.length
        }
        return(
            <Navbar sticky='top' className='nav'>
                <Link className='nav-text' to='/'>
                    PSU Online Ordering
                </Link>
                <Link to='/Checkout'>
                    <FontAwesomeIcon className='nav-text' icon={faShoppingCart} />
                    <span className='nav-text'>{' : '}{numItems}{' items'}</span>
                </Link>
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
});

export default connect(
	mapStateToProps
)(Header);
