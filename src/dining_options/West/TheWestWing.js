import React, { Component } from 'react';
import { ListGroup, ListGroupItem, CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

class TheWestWing extends Component {
    render() {
        return(
            <div>
                <span>
                    <a className='back-button' href='/West'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        West
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </a>
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
                                    <Input type="radio" name="bread-selection" />{' '}
                                    Full White Roll
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="bread-selection" />{' '}
                                    Full Wheat Roll
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="bread-selection" />{' '}
                                    Half White Roll
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="bread-selection" />{' '}
                                    Half Wheat Roll
                                </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <Label>Meat</Label>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="meat-selection" />{' '}
                                    Beef
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="meat-selection" />{' '}
                                    Chicken
                                </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <Label>Cheese</Label>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="cheese-selection" />{' '}
                                    American
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="cheese-selection" />{' '}
                                    Provolone
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="cheese-selection" />{' '}
                                    Cheddar
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="cheese-selection" />{' '}
                                    Pepperjack
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="cheese-selection" />{' '}
                                    No Cheese
                                </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label>Toppings</Label>
                                <div>
                                    <CustomInput type="checkbox" id="grill-lettuce" label="Lettuce" />
                                    <CustomInput type="checkbox" id="grill-tomato" label="Tomato" />
                                    <CustomInput type="checkbox" id="grill-onion" label="Onion" />
                                    <CustomInput type="checkbox" id="grill-pickles" label="Pickles" />
                                    <CustomInput type="checkbox" id="grill-peppers" label="Peppers" />
                                    <CustomInput type="checkbox" id="grill-oregano" label="Oregano" />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label>Sauces</Label>
                                <div>
                                    <CustomInput type="checkbox" id="grill-mayo" label="Mayo" />
                                    <CustomInput type="checkbox" id="grill-ketchup" label="Ketchup" />
                                    <CustomInput type="checkbox" id="grill-ranch" label="Ranch" />
                                    <CustomInput type="checkbox" id="grill-bbq" label="BBQ Sauce" />
                                    <CustomInput type="checkbox" id="grill-hot-sauce" label="Hot Sauce" />
                                    <CustomInput type="checkbox" id="grill-italian" label="Italian Dressing" />
                                </div>
                            </FormGroup>
                        </Form>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Chicken Tenders
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Fried Chicken Sandwich
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Fries
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Grilled Chicken Sandwich
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Mozzarella Sticks
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
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
                                    <Input type="radio" name="bread-selection" />{' '}
                                    Full White Roll
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="bread-selection" />{' '}
                                    Full Wheat Roll
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="bread-selection" />{' '}
                                    Half White Roll
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="bread-selection" />{' '}
                                    Half Wheat Roll
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="bread-selection" />{' '}
                                    White Wrap
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="bread-selection" />{' '}
                                    Wheat Wrap
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="bread-selection" />{' '}
                                    White Panini
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="bread-selection" />{' '}
                                    Wheat Panini
                                </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label>Meat</Label>
                                <div>
                                    <CustomInput type="checkbox" id="chicken-tenders" label="Chicken Tenders" />
                                    <CustomInput type="checkbox" id="grilled-chicken" label="Grilled Chicken" />
                                    <CustomInput type="checkbox" id="turkey" label="Turkey" />
                                    <CustomInput type="checkbox" id="ham" label="Ham" />
                                    <CustomInput type="checkbox" id="salami" label="Salami" />
                                    <CustomInput type="checkbox" id="pepperoni" label="Pepperoni" />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label>Cheese</Label>
                                <div>
                                    <CustomInput type="checkbox" id="deli-american" label="American" />
                                    <CustomInput type="checkbox" id="deli-provolone" label="Provolone" />
                                    <CustomInput type="checkbox" id="deli-cheddar" label="Cheddar" />
                                    <CustomInput type="checkbox" id="deli-pepperjack" label="Pepperjack" />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label>Toppings</Label>
                                <div>
                                    <CustomInput type="checkbox" id="deli-lettuce" label="Lettuce" />
                                    <CustomInput type="checkbox" id="deli-tomato" label="Tomato" />
                                    <CustomInput type="checkbox" id="deli-onion" label="Onion" />
                                    <CustomInput type="checkbox" id="deli-pickles" label="Pickles" />
                                    <CustomInput type="checkbox" id="deli-peppers" label="Peppers" />
                                    <CustomInput type="checkbox" id="deli-oregano" label="Oregano" />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label>Sauces</Label>
                                <div>
                                    <CustomInput type="checkbox" id="deli-mayo" label="Mayo" />
                                    <CustomInput type="checkbox" id="deli-ketchup" label="Ketchup" />
                                    <CustomInput type="checkbox" id="deli-ranch" label="Ranch" />
                                    <CustomInput type="checkbox" id="deli-bbq" label="BBQ Sauce" />
                                    <CustomInput type="checkbox" id="deli-hot-sauce" label="Hot Sauce" />
                                    <CustomInput type="checkbox" id="deli-italian" label="Italian Dressing" />
                                </div>
                            </FormGroup>
                        </Form>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
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
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Pepsi
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Diet Pepsi
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Root Beer
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Dr. Pepper
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Ginger Ale
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Mountain Dew
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Sierra Mist
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default TheWestWing;
