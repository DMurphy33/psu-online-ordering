import React, { Component } from 'react';
import { ListGroup, ListGroupItem, CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCart } from '../../actions';
import '../../App.css';

class RediferCityGrill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cheesesteak: {
                type: 'Cheesesteak',
                bread: null,
                meat: null,
                cheese: null,
                toppings: [],
                sauces: [],
            },  
        };
    }

    addToCart = (item, price) => {
        const foodObject = {
            location: 'West',
            option: 'TheWestWing',
            food: [item],
            price,
        };
        this.props.modifyCart(foodObject);
    }

    handleCheesesteakBreadSelection = (evt) => {
        const newCheeseSteakState = {...this.state.cheesesteak};
        newCheeseSteakState.bread = evt.target.value;
        this.setState({cheesesteak: newCheeseSteakState});
    }

    handleCheesesteakMeatSelection = (evt) => {
        const newCheeseSteakState = {...this.state.cheesesteak};
        newCheeseSteakState.meat = evt.target.value;
        this.setState({cheesesteak: newCheeseSteakState});
    }

    handleCheesesteakCheeseSelection = (evt) => {
        const newCheeseSteakState = {...this.state.cheesesteak};
        newCheeseSteakState.cheese = evt.target.value;
        this.setState({cheesesteak: newCheeseSteakState});
    }

    handleCheesesteakToppingsSelection = (evt) => {
        const newToppings = [...this.state.cheesesteak.toppings];
        let isChecking = true;
        let i = 0;
        while (isChecking) {
            if (evt.target.value === this.state.cheesesteak.toppings[i]) {
                newToppings.splice(i, 1);
                isChecking = false;
            }
            i++;
            if (i >= this.state.cheesesteak.toppings.length) {
                isChecking = false;
            }
        }
        if (newToppings.length !== this.state.cheesesteak.toppings.length) {
            const newCheeseSteakState = {...this.state.cheesesteak};
            newCheeseSteakState.toppings = newToppings;
            this.setState({cheesesteak: newCheeseSteakState});
        } else {
            newToppings.push(evt.target.value);
            const newCheeseSteakState = {...this.state.cheesesteak};
            newCheeseSteakState.toppings = newToppings;
            this.setState({cheesesteak: newCheeseSteakState});
        }
    }

    handleCheesesteakSaucesSelection = (evt) => {
        const newSauces = [...this.state.cheesesteak.sauces];
        let isChecking = true;
        let i = 0;
        while (isChecking) {
            if (evt.target.value === this.state.cheesesteak.sauces[i]) {
                newSauces.splice(i, 1);
                isChecking = false;
            }
            i++;
            if (i >= this.state.cheesesteak.sauces.length) {
                isChecking = false;
            }
        }
        if (newSauces.length !== this.state.cheesesteak.sauces.length) {
            const newCheeseSteakState = {...this.state.cheesesteak};
            newCheeseSteakState.sauces = newSauces;
            this.setState({cheesesteak: newCheeseSteakState});
        } else {
            newSauces.push(evt.target.value);
            const newCheeseSteakState = {...this.state.cheesesteak};
            newCheeseSteakState.sauces = newSauces;
            this.setState({cheesesteak: newCheeseSteakState});
        }
    }

    render() {
        return (
            <div>
                <span>
                    <Link className='back-button' to='/South'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        South
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                </span>
                <h4 className='section-title'>
                    Redifer City Grill
                </h4>
                <ListGroup>
                    <ListGroupItem>
                        <h6>
                            Cheesesteak
                        </h6>
                        <Form>
                            <FormGroup tag="fieldset">
                                <Label>Bread</Label>
                                <FormGroup check>
                                <Label check>
                                    <Input 
                                        onChange={this.handleCheesesteakBreadSelection} 
                                        value='Full White Roll' 
                                        type="radio" 
                                        name="bread-selection" 
                                    />
                                    {' '}
                                    Full White Roll
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input 
                                        onChange={this.handleCheesesteakBreadSelection}
                                        value='Full Wheat Roll'
                                        type="radio" 
                                        name="bread-selection" 
                                    />
                                    {' '}
                                    Full Wheat Roll
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input 
                                        onChange={this.handleCheesesteakBreadSelection}
                                        value='Half White Roll'
                                        type="radio" 
                                        name="bread-selection" 
                                    />
                                    {' '}
                                    Half White Roll
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input 
                                        onChange={this.handleCheesesteakBreadSelection}
                                        value='Half Wheat Roll'
                                        type="radio" 
                                        name="bread-selection" 
                                    />
                                    {' '}
                                    Half Wheat Roll
                                </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <Label>Meat</Label>
                                <FormGroup check>
                                <Label check>
                                    <Input 
                                        onChange={this.handleCheesesteakMeatSelection}
                                        value='Beef'
                                        type="radio"
                                        name="meat-selection" 
                                    />
                                    {' '}
                                    Beef
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleCheesesteakMeatSelection}
                                    value='Chicken'
                                    type="radio" 
                                    name="meat-selection" 
                                />
                                    {' '}
                                    Chicken
                                </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <Label>Cheese</Label>
                                <FormGroup check>
                                <Label check>
                                    <Input 
                                        onChange={this.handleCheesesteakCheeseSelection}
                                        value='American'
                                        type="radio" 
                                        name="cheese-selection" 
                                    />
                                    {' '}
                                    American
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input 
                                        onChange={this.handleCheesesteakCheeseSelection}
                                        value='Provolone'
                                        type="radio" 
                                        name="cheese-selection" 
                                    />
                                    {' '}
                                    Provolone
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input 
                                        onChange={this.handleCheesesteakCheeseSelection}
                                        value='Cheddar'
                                        type="radio" 
                                        name="cheese-selection" 
                                    />
                                    {' '}
                                    Cheddar
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input 
                                        onChange={this.handleCheesesteakCheeseSelection}
                                        value='Pepperjack'
                                        type="radio" 
                                        name="cheese-selection" 
                                    />
                                    {' '}
                                    Pepperjack
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input 
                                        onChange={this.handleCheesesteakCheeseSelection}
                                        value='No Cheese'
                                        type="radio" 
                                        name="cheese-selection" 
                                    />
                                    {' '}
                                    No Cheese
                                </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label>Toppings</Label>
                                <div>
                                    <CustomInput 
                                        onChange={this.handleCheesesteakToppingsSelection}
                                        value='Lettuce'
                                        type="checkbox" 
                                        id="grill-lettuce" 
                                        label="Lettuce" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleCheesesteakToppingsSelection}
                                        value='Tomato'
                                        type="checkbox" 
                                        id="grill-tomato" 
                                        label="Tomato" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleCheesesteakToppingsSelection}
                                        value='Onion'
                                        type="checkbox" 
                                        id="grill-onion" 
                                        label="Onion" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleCheesesteakToppingsSelection}
                                        value='Pickles'
                                        type="checkbox" 
                                        id="grill-pickles" 
                                        label="Pickles" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleCheesesteakToppingsSelection}
                                        value='Peppers'
                                        type="checkbox" 
                                        id="grill-peppers" 
                                        label="Peppers" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleCheesesteakToppingsSelection}
                                        value='Oregano'
                                        type="checkbox" 
                                        id="grill-oregano" 
                                        label="Oregano" 
                                    />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label>Sauces</Label>
                                <div>
                                    <CustomInput 
                                        onChange={this.handleCheesesteakSaucesSelection}
                                        value='Mayo'
                                        type="checkbox" 
                                        id="grill-mayo" 
                                        label="Mayo" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleCheesesteakSaucesSelection}
                                        value='Ketchup'
                                        type="checkbox" 
                                        id="grill-ketchup" 
                                        label="Ketchup" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleCheesesteakSaucesSelection}
                                        value='Ranch'
                                        type="checkbox" 
                                        id="grill-ranch" 
                                        label="Ranch" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleCheesesteakSaucesSelection}
                                        value='BBQ Sauce'
                                        type="checkbox" 
                                        id="grill-bbq" 
                                        label="BBQ Sauce" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleCheesesteakSaucesSelection}
                                        value='Hot Sauce'
                                        type="checkbox" 
                                        id="grill-hot-sauce" 
                                        label="Hot Sauce"
                                    />
                                    <CustomInput 
                                        onChange={this.handleCheesesteakSaucesSelection}
                                        value='Italian Dressing'
                                        type="checkbox" 
                                        id="grill-italian" 
                                        label="Italian Dressing" 
                                    />
                                </div>
                            </FormGroup>
                        </Form>
                        <div style={{fontWeight:'bold'}}>
                            Full: $10.00, Half: $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.state.cheesesteak.bread.slice(0, 4) === 'Full' ?
                                this.addToCart(this.state.cheesesteak, 10.0) :
                                this.addToCart(this.state.cheesesteak, 6.0)
                            }
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
                            onClick={() => this.addToCart("Cheeseburger", 6.0)}
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
                            onClick={() => this.addToCart("Veggie Burger", 6.0)}
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
                            onClick={() => this.addToCart("Chicken Tenders", 4.0)}
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
                            onClick={() => this.addToCart("Fried Chicken Sandwich", 6.0)}
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
                            onClick={() => this.addToCart("Grilled Chicken Sandwich", 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Grilled Cheese PSU
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $4.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart("Grilled Cheese PSU", 4.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Potato and Cheese Pierogies
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $4.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart("Potato and Cheese Pierogies", 4.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Extra Sliced Bacon
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $2.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart("Extra Sliced Bacon", 2.5)}
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
)(RediferCityGrill);
