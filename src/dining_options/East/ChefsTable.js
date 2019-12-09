import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { updateCart } from '../../actions';
import { Link } from 'react-router-dom';
import '../../App.css';

class ChefsTable extends Component {
    addToCart = (item, price) => {
        const foodObject = {
            location: 'East',
            option: 'ChefsTable',
            food: [item],
            price,
        };
        this.props.modifyCart(foodObject);
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
                    Chef's Table
                </h4>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Grilled Portabella Sandwich 
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Grilled Portabella Sandwich', 6.5)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Prime Rib Sandwich 
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $6.50
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Prime Rib Sandwich', 6.5)}
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
)(ChefsTable);
