import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { updateCart } from '../../actions';
import { Link } from 'react-router-dom';
import '../../App.css';

class EastEdge extends Component {
    addToCart = (item, price) => {
        const foodObject = {
            location: 'East',
            option: 'EastEdge',
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
                    Edge
                </h4>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Caprese Tomato Sandwich
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart("Caprese Tomato Sandwich", 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Multigrain Avocado Toast
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart("Multigrain Avocado Toast", 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Caprese Tomato Sandwich
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $5.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart("Caprese Tomato Sandwich", 5.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Multigrain Avocado Toast with Shrimp
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $7.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart("Multigrain Avocado Toast with Shrimp", 7.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Multigrain Toast with Smoked Salmon and Chive Cream Cheese
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $7.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart("Multigrain Toast with Smoked Salmon and Chive Cream Cheese", 7.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Roasted Vegetable Sandwich
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart("Roasted Vegetable Sandwich", 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Smoked Turkey with Cranberry Aioli and Bacon
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $7.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart("Smoked Turkey with Cranberry Aioli and Bacon", 7.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Toast with Riccotta, Proscuitto and Parmesean 
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $5.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart("Toast with Riccotta, Proscuitto and Parmesean ", 5.0)}
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
)(EastEdge);
