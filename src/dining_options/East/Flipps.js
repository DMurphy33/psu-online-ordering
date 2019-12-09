import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { updateCart } from '../../actions';
import { Link } from 'react-router-dom';
import '../../App.css';

class Flipps extends Component {
    addToCart = (item, price) => {
        const foodObject = {
            location: 'East',
            option: 'Flipps',
            food: [item],
            price,
        };
        this.props.modifyCart(foodObject);
    }

    render() {
        return (
            <div>
                <span>
                    <Link className='back-button' to='/East'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                            East
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                </span>
                <h4 className='section-title'>
                    Flipps
                </h4>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Buffalo Chicken Sandwich
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Buffalo Chicken Sandwich', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Cheeseburger
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Cheeseburger', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Double Cheeseburger
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $8.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Double Cheeseburger', 8.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Hamburger
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $5.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Hamburger', 5.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Double Hamburger
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $7.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Double Hamburger', 7.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Chicken Tenders
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $4.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Chicken Tenders', 4.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Fries
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Fries', 3.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Fried Chicken Sandwich
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Fried Chicken Sandwich', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Grilled Chicken Sandwich
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Grilled Chicken Sandwich', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Grilled Cheese Sandwich PSU
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $4.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Grilled Cheese Sandwich PSU', 4.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Mozzarella Sticks
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $4.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Mozzarella Sticks', 4.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Veggie Burger
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Veggie Burger', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Bacon Slices
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $2.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Bacon Slices', 2.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
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
)(Flipps);
