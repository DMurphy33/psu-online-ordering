import React, { Component } from 'react';
import { ListGroup, ListGroupItem, CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCart } from '../../actions';
import '../../App.css';

class TheWestWing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cheesesteak: {
                bread: null,
                meat: null,
                cheese: null,
                toppings: [],
                sauces: [],
            },  
            subsAndWraps: {
                bread: null,
                meat: [],
                cheese: [],
                toppings: [],
                sauces: [],
            }
        }
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

    handleSubsAndWrapsBreadSelection = (evt) => {
        const newSubsAndWrapsState = {...this.state.subsAndWraps};
        newSubsAndWrapsState.bread = evt.target.value;
        this.setState({subsAndWraps: newSubsAndWrapsState});
    }

    handleSubsAndWrapsMeatSelection = (evt) => {
        const newMeat = [...this.state.subsAndWraps.meat];
        let isChecking = true;
        let i = 0;
        while (isChecking) {
            if (evt.target.value === this.state.subsAndWraps.meat[i]) {
                newMeat.splice(i, 1);
                isChecking = false;
            }
            i++;
            if (i >= this.state.subsAndWraps.meat.length) {
                isChecking = false;
            }
        }
        if (newMeat.length !== this.state.subsAndWraps.meat.length) {
            const newSubsAndWrapsState = {...this.state.subsAndWraps};
            newSubsAndWrapsState.meat = newMeat;
            this.setState({subsAndWraps: newSubsAndWrapsState});
        } else {
            newMeat.push(evt.target.value);
            const newSubsAndWrapsState = {...this.state.subsAndWraps};
            newSubsAndWrapsState.meat = newMeat;
            this.setState({subsAndWraps: newSubsAndWrapsState});
        }
    }

    handleSubsAndWrapsCheeseSelection = (evt) => {
        const newCheese = [...this.state.subsAndWraps.cheese];
        let isChecking = true;
        let i = 0;
        while (isChecking) {
            if (evt.target.value === this.state.subsAndWraps.cheese[i]) {
                newCheese.splice(i, 1);
                isChecking = false;
            }
            i++;
            if (i >= this.state.subsAndWraps.cheese.length) {
                isChecking = false;
            }
        }
        if (newCheese.length !== this.state.subsAndWraps.cheese.length) {
            const newSubsAndWrapsState = {...this.state.subsAndWraps};
            newSubsAndWrapsState.cheese = newCheese;
            this.setState({subsAndWraps: newSubsAndWrapsState});
        } else {
            newCheese.push(evt.target.value);
            const newSubsAndWrapsState = {...this.state.subsAndWraps};
            newSubsAndWrapsState.cheese = newCheese;
            this.setState({subsAndWraps: newSubsAndWrapsState});
        }
    }

    handleSubsAndWrapsToppingsSelection = (evt) => {
        const newToppings = [...this.state.subsAndWraps.toppings];
        let isChecking = true;
        let i = 0;
        while (isChecking) {
            if (evt.target.value === this.state.subsAndWraps.toppings[i]) {
                newToppings.splice(i, 1);
                isChecking = false;
            }
            i++;
            if (i >= this.state.subsAndWraps.toppings.length) {
                isChecking = false;
            }
        }
        if (newToppings.length !== this.state.subsAndWraps.toppings.length) {
            const newSubsAndWrapsState = {...this.state.subsAndWraps};
            newSubsAndWrapsState.toppings = newToppings;
            this.setState({subsAndWraps: newSubsAndWrapsState});
        } else {
            newToppings.push(evt.target.value);
            const newSubsAndWrapsState = {...this.state.subsAndWraps};
            newSubsAndWrapsState.toppings = newToppings;
            this.setState({subsAndWraps: newSubsAndWrapsState});
        }
    }

    handleSubsAndWrapsSaucesSelection = (evt) => {
        const newSauces = [...this.state.subsAndWraps.sauces];
        let isChecking = true;
        let i = 0;
        while (isChecking) {
            if (evt.target.value === this.state.subsAndWraps.sauces[i]) {
                newSauces.splice(i, 1);
                isChecking = false;
            }
            i++;
            if (i >= this.state.subsAndWraps.sauces.length) {
                isChecking = false;
            }
        }
        if (newSauces.length !== this.state.subsAndWraps.sauces.length) {
            const newSubsAndWrapsState = {...this.state.subsAndWraps};
            newSubsAndWrapsState.sauces = newSauces;
            this.setState({subsAndWraps: newSubsAndWrapsState});
        } else {
            newSauces.push(evt.target.value);
            const newSubsAndWrapsState = {...this.state.subsAndWraps};
            newSubsAndWrapsState.sauces = newSauces;
            this.setState({subsAndWraps: newSubsAndWrapsState});
        }
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
                    The West Wing
                </h4>
                <h5>
                    Grill
                </h5>
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
                            Chicken Tenders
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Chicken Tenders', 5.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Fried Chicken Sandwich
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Fried Chicken Sandwich', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Fries
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Fries', 4.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Grilled Chicken Sandwich
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Grilled Chicken Sandwich', 6.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Mozzarella Sticks
                        </span>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Mozzarella Sticks', 4.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Deli
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <h6>
                            Subs and Wraps
                        </h6>
                        <Form>
                            <FormGroup tag="fieldset">
                                <Label>Bread</Label>
                                <FormGroup check>
                                <Label check>
                                    <Input 
                                        onChange={this.handleSubsAndWrapsBreadSelection}
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
                                        onChange={this.handleSubsAndWrapsBreadSelection}
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
                                        onChange={this.handleSubsAndWrapsBreadSelection}
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
                                        onChange={this.handleSubsAndWrapsBreadSelection}
                                        value='Half Wheat Roll' 
                                        type="radio" 
                                        name="bread-selection" 
                                    />
                                    {' '}
                                    Half Wheat Roll
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input 
                                        onChange={this.handleSubsAndWrapsBreadSelection}
                                        value='White Wrap'
                                        type="radio" 
                                        name="bread-selection" 
                                    />
                                    {' '}
                                    White Wrap
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input 
                                        onChange={this.handleSubsAndWrapsBreadSelection}
                                        value='Wheat Wrap'
                                        type="radio"
                                        name="bread-selection" 
                                    />
                                    {' '}
                                    Wheat Wrap
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input 
                                        onChange={this.handleSubsAndWrapsBreadSelection}
                                        value='White Panini'
                                        type="radio" 
                                        name="bread-selection" 
                                    />
                                    {' '}
                                    White Panini
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input 
                                        onChange={this.handleSubsAndWrapsBreadSelection}
                                        value='Wheat Panini'
                                        type="radio" 
                                        name="bread-selection" 
                                    />
                                    {' '}
                                    Wheat Panini
                                </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label>Meat</Label>
                                <div>
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsMeatSelection}
                                        value='Chicken Tenders'
                                        type="checkbox" 
                                        id="chicken-tenders" 
                                        label="Chicken Tenders" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsMeatSelection}
                                        value='Grilled Chicken'
                                        type="checkbox" 
                                        id="grilled-chicken" 
                                        label="Grilled Chicken"
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsMeatSelection}
                                        value='Turkey'
                                        type="checkbox" 
                                        id="turkey" 
                                        label="Turkey" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsMeatSelection}
                                        value='Ham'
                                        type="checkbox" 
                                        id="ham" 
                                        label="Ham" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsMeatSelection}
                                        value='Salami'
                                        type="checkbox" 
                                        id="salami" 
                                        label="Salami" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsMeatSelection}
                                        value='Pepperoni'
                                        type="checkbox" 
                                        id="pepperoni" 
                                        label="Pepperoni" 
                                    />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label>Cheese</Label>
                                <div>
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsCheeseSelection}
                                        value='American'
                                        type="checkbox" 
                                        id="deli-american" 
                                        label="American" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsCheeseSelection}
                                        value='Provolone'
                                        type="checkbox" 
                                        id="deli-provolone" 
                                        label="Provolone" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsCheeseSelection}
                                        value='Cheddar'
                                        type="checkbox" 
                                        id="deli-cheddar" 
                                        label="Cheddar" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsCheeseSelection}
                                        value='Pepperjack'
                                        type="checkbox" 
                                        id="deli-pepperjack" 
                                        label="Pepperjack" 
                                    />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label>Toppings</Label>
                                <div>
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsToppingsSelection}
                                        value='Lettuce'
                                        type="checkbox" 
                                        id="deli-lettuce" 
                                        label="Lettuce" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsToppingsSelection}
                                        value='Tomato'
                                        type="checkbox" 
                                        id="deli-tomato" 
                                        label="Tomato" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsToppingsSelection}
                                        value='Onion'
                                        type="checkbox" 
                                        id="deli-onion" 
                                        label="Onion" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsToppingsSelection}
                                        value='Pickles'
                                        type="checkbox" 
                                        id="deli-pickles" 
                                        label="Pickles" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsToppingsSelection}
                                        value='Peppers'
                                        type="checkbox" 
                                        id="deli-peppers" 
                                        label="Peppers" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsToppingsSelection}
                                        value='Oregano'
                                        type="checkbox" 
                                        id="deli-oregano" 
                                        label="Oregano" 
                                    />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label>Sauces</Label>
                                <div>
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsSaucesSelection}
                                        value='Mayo'
                                        type="checkbox" 
                                        id="deli-mayo" 
                                        label="Mayo" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsSaucesSelection}
                                        value='Ketchup'
                                        type="checkbox" 
                                        id="deli-ketchup" 
                                        label="Ketchup" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsSaucesSelection}
                                        value='Ranch'
                                        type="checkbox" 
                                        id="deli-ranch" 
                                        label="Ranch" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsSaucesSelection}
                                        value='BBQ Sauce'
                                        type="checkbox" 
                                        id="deli-bbq" 
                                        label="BBQ Sauce" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsSaucesSelection}
                                        value='Hot Sauce'
                                        type="checkbox" 
                                        id="deli-hot-sauce" 
                                        label="Hot Sauce" 
                                    />
                                    <CustomInput 
                                        onChange={this.handleSubsAndWrapsSaucesSelection}
                                        value='Italian Dressing'
                                        type="checkbox" 
                                        id="deli-italian" 
                                        label="Italian Dressing" 
                                    />
                                </div>
                            </FormGroup>
                        </Form>
                        <FontAwesomeIcon 
                            onClick={() => this.state.subsAndWraps.bread.slice(0, 4) === 'Half' ?
                                this.addToCart(this.state.subsAndWraps, 6.0) :
                                this.addToCart(this.state.subsAndWraps, 10.0)
                        }
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
)(TheWestWing);
