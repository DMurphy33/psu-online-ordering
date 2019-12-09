import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { updateCart } from '../../actions';
import { Link } from 'react-router-dom';
import '../../App.css';

class McCalistersDeli extends Component {
    addToCart = (item, price) => {
        const foodObject = {
            location: 'HUB',
            option: 'McCalistersDeli',
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
                    McCalister's Deli
                </h4>
                <h5>
                    Salads
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Savannah Chopped Salad
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Savannah Chopped Salad', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Southwest Chicken Avocado Salad
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Southwest Chicken Avocado Salad', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Grilled Chicken Salad
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Grilled Chicken Salad', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Garden Salad
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Garden Salad', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Chef Salad
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
                            Caesar Salad
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Caesar Salad', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Shareables
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Nacho Basket
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Nacho Basket', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Ultimate Nachos
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $8.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Ultimate Nachos', 8.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Sandwiches
                </h5>
                <h6>
                    Clubs
                </h6>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            The McCalister's Club
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $8.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart("The McCalister's Club", 8.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Grilled Chicken Club
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $8.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Grilled Chicken Club', 8.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            King Club
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $8.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('King Club', 8.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Orange Cranberry Club
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $8.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Orange Cranberry Club', 8.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Black Angus Club
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $8.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Black Angus Club', 8.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h6>
                    Craveable Classics
                </h6>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Ham and Cheese Melt
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Ham and Cheese Melt', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Four Cheese Melt
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Four Cheese Melt', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Harvest Chicken Salad
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Harvest Chicken Salad', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Grilled Chicken
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $7.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Grilled Chicken', 7.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h6>
                    Big & Bold
                </h6>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            French Dip
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $8.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('French Dip', 8.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            The New Yorker
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $8.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('The New Yorker', 8.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            The Italian
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $8.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('The Italian', 8.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Memphian
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $8.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Memphian', 8.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Reuben
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $8.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Reuben', 8.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Rachel
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $8.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Rachel', 8.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h6>
                    Fresh Favorites
                </h6>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            The Veggie
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('The Veggie', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Grilled Chicken Caesar Wrap
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $8.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Grilled Chicken Caesar Wrap', 8.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Garden Fresh Turkey
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Garden Fresh Turkey', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            BLT + A
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('The Veggie', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h6>
                    Savory & Spicy
                </h6>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Jalapeno Turkey Crunch
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Jalapeno Turkey Crunch', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Spicy Turkey Melt
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Spicy Turkey Melt', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Horseradish Roast Beef & Cheddar
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $7.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Horseradish Roast Beef & Cheddar', 7.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Sweet Chipotle Chicken
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $7.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Sweet Chipotle Chicken', 7.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Spicy Southwest Chicken
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $7.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Spicy Southwest Chicken', 7.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Smoky Pepper Jack Turkey
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Smoky Pepper Jack Turkey', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Spuds
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Justaspud
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $4.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Justaspud', 4.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Chipotle Chicken Bacon Spud
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Chipotle Chicken Bacon Spud', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Black Angus Roast Beef Spud
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Black Angus Roast Beef Spud', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Veggie Spud
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $4.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Veggie Spud', 4.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Spud Max
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Spud Max', 6.0)}
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
                            Spud Chips
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $2.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Spud Chips', 2.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Mac & Cheese
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $4.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Mac & Cheese', 4.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Potato Salad
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $4.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Potato Salad', 4.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Steamed Broccoli
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $2.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Steamed Broccoli', 2.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Tomato & Cucumber Salad
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $4.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Tomato & Cucumber Salad', 4.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Fresh Fruit
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $5.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Fresh Fruit', 5.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Desserts
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            House Baked Cookie
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('House Baked Cookie', 3.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Brownie
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Brownie', 3.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Brookie
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Brookie', 3.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Beverages
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            McCalister's Famous Tea
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart("McCalister's Famous Tea", 3.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Pure Cane Sugar Lemonade
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Pure Cane Sugar Lemonade', 3.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Lemonade Tea
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Lemonade Tea', 3.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
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
)(McCalistersDeli);