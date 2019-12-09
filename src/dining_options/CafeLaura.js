import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCart } from '../actions';
import '../App.css';

class CafeLaura extends Component {
    addToCart = (item, price) => {
        const foodObject = {
            location: 'CafeLaura',
            option: 'CafeLaura',
            food: [item],
            price,
        };
        this.props.modifyCart(foodObject);
    }

    render() {
        return(
            <div>
                <span>
                    <Link className='back-button' to='/'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        Locations
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                </span>
                <h4 className='section-title'>
                    Cafe Laura
                </h4>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Lentil with Spicy Sausage
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $5.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Lentil with Spicy Sausage', 5.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Fennel Crusted Pork Chops
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $5.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Fennel Crusted Pork Chops', 5.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Potato Wedges
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Potato Wedges', 3.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Steamed Snow Peas and Carrots
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Steamed Snow Peas and Carrots', 3.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Barbeque Pulled Turkey with Asian Slaw
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $5.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Barbeque Pulled Turkey with Asian Slaw', 5.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Blended Burger on a Multigrain Roll
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Blended Burger on a Multigrain Roll', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            French Fries
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('French Fries', 3.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    modifyCart: payload => dispatch(updateCart(payload)),
});

const mapStateToProps = state => ({
    cart: state.cart,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CafeLaura);
