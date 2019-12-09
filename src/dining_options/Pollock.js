import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faChevronLeft, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { updateCart } from '../actions';
import { Link } from 'react-router-dom';
import '../App.css';

class Pollock extends Component {
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

    addToCart = () => {
        const foodObject = {
            location: 'Pollock',
            option: 'Pollock',
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
                    <Link className='back-button' to='/'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        Locations
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                </span>
                <h4 className='section-title'>
                    Pollock
                </h4>
                {this.getFoodSelectionsTop()}
                <h5>
                    Plate
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Apple Butter BBQ Sauce
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Apple Butter BBQ Sauce')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Blended Lamb Slider with Yogurt Mint Dressing
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Blended Lamb Slider with Yogurt Mint Dressing')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Butternut Squash Mash
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Butternut Squash Mash')} 
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
                            Cider Brined Smoked Turkey
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Cider Brined Smoked Turkey')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Cilantro Chutney
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Cilantro Chutney')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            French Fries
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('French Fries')} 
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
                            Jasmine Rice
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Jasmine Rice')} 
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
                    <ListGroupItem>
                        <span>
                            Samosas
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Samosas')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Leaf
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Beef Flank Steak
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Beef Flank Steak')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Brown Rice
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Brown Rice')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Ginger Glazed Bok Choy
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Ginger Glazed Bok Choy')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Quinoa Falafel with Cucumber Salad
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Quinoa Falafel with Cucumber Salad')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Roasted Butternut Squash
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Roasted Butternut Squash')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Silken Cucumber Sauce
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Silken Cucumber Sauce')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Soba Noodles
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Soba Noodles')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Soup
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
                    Gusto
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
                    <ListGroupItem>
                        <span>
                            Whole Wheat Chicken and Spinach Alfredo Pizza
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Whole Wheat Chicken and Spinach Alfredo Pizza')} 
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Envy
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Fresh Baked Chocolate Chip Cookie
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.handleSelection('Fresh Baked Chocolate Chip Cookie')} 
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
)(Pollock);
