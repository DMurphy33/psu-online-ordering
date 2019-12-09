import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Form, FormGroup, Label, CustomInput, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { updateCart } from '../../actions';
import { Link } from 'react-router-dom';
import '../../App.css';

class EastDeli extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            subsAndWraps: {
                type: 'Sub',
                bread: null,
                meat: [],
                cheese: [],
                toppings: [],
                sauces: [],
            }
        };
    }

    addToCart = (item, price) => {
        const foodObject = {
            location: 'East',
            option: 'EastDeli',
            food: [item],
            price,
        };
        this.props.modifyCart(foodObject);
    }

    handleSubsAndWrapsBreadSelection = (evt) => {
        const newSubsAndWrapsState = {...this.state.subsAndWraps};
        newSubsAndWrapsState.bread = evt.target.value;
        if (evt.target.value.slice(-4) === 'Wrap') {
            newSubsAndWrapsState.type = 'Wrap';
        }
        if (evt.target.value.slice(-6) === 'Panini') {
            newSubsAndWrapsState.type = 'Panini';
        }
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
                    Deli
                </h4>
                <ListGroup>
                    <ListGroupItem>
                        <h5>
                            Subs and Wraps
                        </h5>
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
                        <div style={{fontWeight:'bold'}}>
                            Full Sub/ Wrap/ Panini: $10.00, Half: $6.00
                        </div>
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
)(EastDeli);

