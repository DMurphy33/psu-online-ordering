import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { updateCart } from '../../actions';
import { Link } from 'react-router-dom';
import '../../App.css';

class ChickFilA extends Component {
    addToCart = (item, price) => {
        const foodObject = {
            location: 'HUB',
            option: 'ChickFilA',
            food: [item],
            price,
        };
        this.props.modifyCart(foodObject);
    }

    render() {
        return (
            <div>
                <span>
                    <Link className='back-button' to='/HUB'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                            HUB Dining
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                </span>
                <h4 className='section-title'>
                    Chick-Fil-A
                </h4>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Original Chicken Sandwich
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Original Chicken Sandwich', 3.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            8pc Chicken Nuggets
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $4.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('8pc Chicken Nuggets', 4.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            12pc Chicken Nuggets
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('12pc Chicken Nuggets', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Small Waffle Fries
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $2.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Small Waffle Fries', 2.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Large Waffle Fries
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Large Waffle Fries', 3.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Chick-Fil-A Sauce
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $0.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Chick-Fil-A Sauce', 0.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            BBQ Sauce
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $0.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('BBQ Sauce', 0.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Buffalo Sauce
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $0.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Buffalo Sauce', 0.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Ranch
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $0.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Ranch', 0.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Polynesian Sauce
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $0.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Polynesian Sauce', 0.0)}
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
)(ChickFilA);