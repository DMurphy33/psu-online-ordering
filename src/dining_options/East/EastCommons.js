import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faChevronLeft, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { updateCart } from '../../actions';
import { Link } from 'react-router-dom';
import '../../App.css';

class EastCommons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFood: [],
            selectedDrink: null,
        };
    }

    addToCart = () => {
        const foodObject = {
            location: 'East',
            option: 'EastCommons',
            food: this.state.selectedFood,
            price: 12.0,
        };
        this.props.modifyCart(foodObject);
        this.setState({
            selectedFood: [],
            selectedDrink: null,
        });
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
                </div>
            food.push(
                <div style={{fontWeight:'bold', textAlign:'right'}}>
                    $12.00
                </div>
            );
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
                </div>
            food.push(
                <div style={{fontWeight:'bold', textAlign:'right'}}>
                    $12.00
                </div>
            );
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
                    East Commons
                </h4>
                {this.getFoodSelectionsTop()}
                <h5>
                    Soups
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Hearty Vegetarian Chili
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Hearty Vegetarian Chili')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Zuppa Toscana
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Zuppa Toscana')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Entrees
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Chicken Parmesean
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Chicken Parmesean')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Chickpea Meatball
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Chickpea Meatball')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Fennel Crusted Pork Loin with Caramelized Shallots
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Fennel Crusted Pork Loin with Caramelized Shallots')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Homemade Tomato and Basil Sauce
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Homemade Tomato and Basil Sauce')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Italian Herb Grilled Chicken Thighs
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Italian Herb Grilled Chicken Thighs')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Spaghetti
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Spaghetti')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Veggie Spaghetti
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Veggie Spaghetti')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Vegetables/ Starches
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Garlic Bread
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Garlic Bread')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Italian Vegetables
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Italian Vegetables')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Roasted Parmesean Cauliflower
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Roasted Parmesean Cauliflower')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Test Kitchen
                </h5>
                <ListGroup>
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
                            Vodka Sauce
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Vodka Sauce')} 
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
                    Desserts
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Chewy Chocolate Chip Cookie
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Chewy Chocolate Chip Cookie')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Peanut Butter No Bake Cookie
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Peanut Butter No Bake Cookie')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            White Russian Tiramisu
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('White Russian Tiramisu')} 
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
)(EastCommons);
