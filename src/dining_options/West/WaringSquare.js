import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronLeft, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { updateCart } from '../../actions';
import { Link } from 'react-router-dom';
import '../../App.css';

class WaringSquare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFood: [],
            selectedDrink: null,
        };
    }

    handleDrinkSelection = (evt) => {
        this.setState({selectedDrink: evt.target.value});
    }

    handleSelection = (item) => {
        if (item) {
            const newState = [...this.state.selectedFood];
            newState.push(item);
            this.setState({selectedFood: newState});
        } else return;
    }

    getFoodSelectionsTop = () => {
        const selectionsHeader = <h5 key='selections-header' className='section-title'>
                Current Selections
            </h5>
        if (this.state.selectedFood.length > 0) {
            const food = [];
            food.push(selectionsHeader);
            for (let i = 0; i < this.state.selectedFood.length; i++) {
                food.push(
                    <div key={`${this.state.selectedFood}${i}`} className='page-description'>
                        {this.state.selectedFood[i]}
                        <FontAwesomeIcon
                            onClick={() => this.removeItem(this.state.selectedFood[i])}
                            className='add-item-plus'
                            icon={faMinusCircle}
                        />
                    </div>);
            }
            const addToCartButton = <div key='cart-button' className='buffet-cart-button'>
                    <Button onClick={this.addToCart}>
                        Add Items to Cart
                    </Button>
                </div>;
            food.push(addToCartButton);
            return food;
        } else {
            return(
                <div className='page-description'>
                    <h5 className='section-title'>
                        Current Selections
                    </h5>
                    <em>
                        Select items using the plus sign next to the item of your choice. 
                        Then click the add items to cart button here or at the bottom 
                        of the page to confirm your buffet selections.
                    </em>
                </div>
            );
        } 
    }

    getFoodSelectionsBottom = () => {
        const selectionsHeader = <h5 key='selections-header' className='section-title'>
                Current Selections
            </h5>
        if (this.state.selectedFood.length > 0) {
            const food = [];
            food.push(selectionsHeader);
            for (let i = 0; i < this.state.selectedFood.length; i++) {
                food.push(
                    <div key={`${this.state.selectedFood}${i}`} className='page-description'>
                        {this.state.selectedFood[i]}
                        <FontAwesomeIcon
                            onClick={() => this.removeItem(this.state.selectedFood[i])}
                            className='add-item-plus'
                            icon={faMinusCircle}
                        />
                    </div>);
            }
            const addToCartButton = <div key='cart-button' className='buffet-cart-button'>
                    <Button onClick={this.addToCart}>
                        Add Items to Cart
                    </Button>
                </div>;
            food.push(addToCartButton);
            return food;
        } else {
            return(
                <div className='page-description'>
                    <h5 className='section-title'>
                        Current Selections
                    </h5>
                    <em>
                        Select items using the plus sign. Then add the items to your cart here.
                    </em>
                </div>
            );
        } 
    }

    addToCart = () => {
        const foodObject = {
            location: 'West',
            option: 'WaringSquare',
            food: this.state.selectedFood,
            price: 12.0,
        };
        this.props.modifyCart(foodObject);
        this.setState({
            selectedFood: [],
            selectedDrink: null,
        });
    }

    removeItem = (item) => {
        const newSelectedFood = [...this.state.selectedFood]

        let isUpdating = true;
        let i = 0;
        while (isUpdating) {
            if (item === this.state.selectedFood[i]) {
                newSelectedFood.splice(i, 1);
                isUpdating = false;
            }
            i++;
            if (i === this.state.selectedFood.length) {
                isUpdating = false;
            }
        }
        this.setState({selectedFood: newSelectedFood});
    }

    render() {
        return(
            <div>
                <span>
                    <Link className='back-button' to='/West'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        West
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                </span>
                <h4 className='section-title'>
                    Waring Square
                </h4>
                    {this.getFoodSelectionsTop()}
                <h5>
                    Grill
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Basmati Rice
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Basmati Rice')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Cheeseburger
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Cheeseburger')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Cranberry Braised Chicken
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Cranberry Braised Chicken')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Grilled Chicken Thigh Halal
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Grilled Chicken Thigh Halal')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Peas
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Peas')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Seasoned Curly Fries
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Seasoned Curly Fries')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Tuscan Garden Vegetables
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Tuscan Garden Vegetables')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Soup Du Jour
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Assorted Rolls
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Assorted Rolls')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Croutons
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Croutons')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            French Onion Soup
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('French Onion Soup')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Mozzarella/Provolone
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Mozzarella/Provolone')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Oeste
                </h5>
                <ListGroup>
                <ListGroupItem>
                        <span>
                           Basmati Rice 
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Basmati Rice')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Channa Masala
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Channa Masala')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Lamb Curry & Peas
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Lamb Curry & Peas')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Saag Paneer
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Saag Paneer')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Center Stage Feature
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Shrimp Curry w/ Butternut Squash & Green Beans 
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Shrimp Curry w/ Butternut Squash & Green Beans')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Pizza & Pasta
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Cheese Pizza
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Cheese Pizza')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Creamy Tomato Basil Sauce
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Creamy Tomato Basil Sauce')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Garlic and Cheese Breadsticks
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Garlic and Cheese Breadsticks')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Milano Sauce
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Milano Sauce')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Penne Pasta
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Penne Pasta')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Pepperoni Pizza
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Pepperoni Pizza')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Sicilian Cheese Pizza
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Sicilian Cheese Pizza')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Wheat Penne Pasta
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Wheat Penne Pasta')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Veg Works
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Pita Croutons
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Pita Croutons')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Roasted Garlic Potatoes
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Roasted Garlic Potatoes')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Shorbat Adas- Lentil Soup
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Shorbat Adas- Lentil Soup')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Vegan Sweet Potato Pancakes with Chipotle Sauce
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Vegan Sweet Potato Pancakes with Chipotle Sauce')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Veggie Burger Patty
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Veggie Burger Patty')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Zucchini and Yellow Squash
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Zucchini and Yellow Squash')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Desserts & Pastries
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Decadent Chocolate Cake
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Decadent Chocolate Cake')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Fresh Baked Chocolate Chip Cookies
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Fresh Baked Chocolate Chip Cookies')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Honeydew & Pineapple
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Honeydew & Pineapple')} 
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
                        <Form>
                            <FormGroup tag="fieldset">
                                <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleDrinkSelection} value='Whole Milk' type="radio" name="drink-selection" />{' '}
                                    Whole Milk
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleDrinkSelection} value='2% Milk' type="radio" name="drink-selection" />{' '}
                                    2% Milk
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleDrinkSelection} value='Skim Milk' type="radio" name="drink-selection" />{' '}
                                    Skim Milk
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleDrinkSelection} value='Chocolate Milk' type="radio" name="drink-selection" />{' '}
                                    Chocolate Milk
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleDrinkSelection} value='Water' type="radio" name="drink-selection" />{' '}
                                    Water
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleDrinkSelection} value='Pepsi' type="radio" name="drink-selection" />{' '}
                                    Pepsi
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleDrinkSelection} value='Diet Pepsi' type="radio" name="drink-selection" />{' '}
                                    Diet Pepsi
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleDrinkSelection} value='Root Beer' type="radio" name="drink-selection" />{' '}
                                    Root Beer
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleDrinkSelection} value='Ginger Ale' type="radio" name="drink-selection" />{' '}
                                    Ginger Ale
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleDrinkSelection} value='Dr. Pepper' type="radio" name="drink-selection" />{' '}
                                    Dr. Pepper
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleDrinkSelection} value='Sierra Mist' type="radio" name="drink-selection" />{' '}
                                    Sierra Mist
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleDrinkSelection} value='Mountain Dew' type="radio" name="drink-selection" />{' '}
                                    Mountain Dew
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleDrinkSelection} value='Orange Juice' type="radio" name="drink-selection" />{' '}
                                    Orange Juice
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleDrinkSelection} value='Apple Juice' type="radio" name="drink-selection" />{' '}
                                    Apple Juice
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleDrinkSelection} value='Cranberry Juice' type="radio" name="drink-selection" />{' '}
                                    Cranberry Juice
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleDrinkSelection} value='Lemonade' type="radio" name="drink-selection" />{' '}
                                    Lemonade
                                </Label>
                                </FormGroup>
                            </FormGroup>
                        </Form>
                        <FontAwesomeIcon 
                                onClick={() => this.handleSelection(this.state.selectedDrink)}
                                className='add-item-plus'
                                icon={faPlusCircle} 
                            />
                    </ListGroupItem>
                </ListGroup>
                {this.getFoodSelectionsBottom()}
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
)(WaringSquare);
