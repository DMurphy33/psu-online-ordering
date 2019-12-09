import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { updateCart } from '../../actions';
import { Link } from 'react-router-dom';
import '../../App.css';

class Sbarro extends Component {
    addToCart = (item, price) => {
        const foodObject = {
            location: 'HUB',
            option: 'Sbarra',
            food: [item],
            price,
        };
        this.props.modifyCart(foodObject);
    }

    render() {
        return(
            <div>
                <span>
                    <Link className='back-button' to='/HUB'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                            HUB Dining
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                </span>
                <h4 className='section-title'>
                    Sbarro
                </h4>
                <h5>
                    XL NY Pizza
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Pepperoni Slice
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Pepperoni Slice', 3.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Spinach and Tomato Slice
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Spinach and Tomato Slice', 3.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Four Cheese White
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Four Cheese White', 3.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Sausage Slice
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Sausage Slice', 3.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Cheese Slice
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Cheese Slice', 3.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Supremo Slice
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Supremo Slice', 3.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Classic Hawaiian Slice
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Classic Hawaiian Slice', 3.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Roman Pizza
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Meat Primo Slice
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Meat Primo Slice', 3.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Cheese Slice
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Cheese Slice', 3.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Veggie Slice
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Veggie Slice', 3.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Buffalo Chicken Slice
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Buffalo Chicken Slice', 3.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Stromboli
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Pepperoni Stromboli
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $5.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Pepperoni Stromboli', 5.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Spinach Stromboli
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $5.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Spinach Stromboli', 5.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Chicken & Four Cheese Stromboli
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $5.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Chicken & Four Cheese Stromboli', 5.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Pasta and Salads
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Baked Ziti
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $5.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Baked Ziti', 5.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Spaghetti & Meetballs
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $5.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Spaghetti & Meetballs', 5.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Garden Salad
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $4.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Garden Salad', 4.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Caesar Salad
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $4.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Caesar Salad', 4.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Sides
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Breadsticks
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $2.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Breadsticks', 2.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Drinks
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Water
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $0.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Water', 0.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Pepsi
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $2.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Pepsi', 2.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Diet Pepsi
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $2.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Diet Pepsi', 2.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Root Beer
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $2.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Root Beer', 2.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Dr. Pepper
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $2.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Dr. Pepper', 2.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Ginger Ale
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $2.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Ginger Ale', 2.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Mountain Dew
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $2.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Mountain Dew', 2.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Sierra Mist
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $2.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Sierra Mist', 2.5)}
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
)(Sbarro);