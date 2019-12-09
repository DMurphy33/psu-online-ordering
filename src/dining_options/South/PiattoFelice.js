import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { updateCart } from '../../actions';
import { Link } from 'react-router-dom';
import '../../App.css';

class PiattoFelice extends Component {
    addToCart = (item, price) => {
        const foodObject = {
            location: 'South',
            option: 'PiattoFelice',
            food: [item],
            price,
        };
        this.props.modifyCart(foodObject);
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
                    Piatto Felice
                </h4>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Cheese Pizza
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart("Cheese Pizza", 3.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Pepperoni Pizza
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $3.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart("Pepperoni Pizza", 3.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Italian Stromboli
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart("Italian Stromboli", 6.0)}
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
)(PiattoFelice);

