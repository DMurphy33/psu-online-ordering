import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

class WaringSquare extends Component {
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
                    Waring Square
                </h4>
                <h5>
                    Grill
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Basmati Rice
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Cheeseburger
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Cranberry Braised Chicken
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Grilled Chicken Thigh Halal
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Peas
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Seasoned Curly Fries
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Tuscan Garden Vegetables
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
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
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Croutons
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            French Onion Soup
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Mozzarella/Provolone
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
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
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Channa Masala
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Lamb Curry & Peas
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Saag Paneer
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                </ListGroup>
                <h5>
                    Center Stage Feature
                </h5>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Shrimp Curry w/Butternut Squash & Green Beans 
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
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
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Creamy Tomato Basil Sauce
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Garlic and Cheese Breadsticks
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Milano Sauce
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Penne Pasta
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Pepperoni Pizza
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Sicilian Cheese Pizza
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Wheat Penne Pasta
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
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
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Roasted Garlic Potatoes
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Shorbat Adas- Lentil Soup
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Vegan Sweet Potato Pancakes with Chipotle Sauce
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Veggie Burger Patty
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Zucchini and Yellow Squash
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
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
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Fresh Baked Chocolate Chip Cookies
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Honeydew & Pineapple
                        </span>
                        <FontAwesomeIcon className='add-item-plus' icon={faPlusCircle} />
                    </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default WaringSquare;
