import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { updateCart } from '../../actions';
import { Link } from 'react-router-dom';
import '../../App.css';

class WorldBeat extends Component {
    addToCart = (item, price) => {
        const foodObject = {
            location: 'North',
            option: 'WorldBeat',
            food: [item],
            price,
        };
        this.props.modifyCart(foodObject);
    }

    render() {
        return(
            <div>
                <span>
                    <Link className='back-button' to='/North'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                            North
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                </span>
                <h4 className='section-title'>
                    World Beat
                </h4>
                <ListGroup>
                    <ListGroupItem>
                        <span>
                            Cheese Quesadilla with Pico De Gallo
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $5.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Cheese Quesadilla with Pico De Gallo', 5.0)}
                            className='add-item-plus' 
                            icon={faPlusCircle} 
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <span>
                            Chicken Quesadilla
                        </span>
                        <div style={{fontWeight:'bold'}}>
                            $5.00
                        </div>
                        <FontAwesomeIcon 
                            onClick={() => this.addToCart('Chicken Quesadilla', 5.0)}
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
)(WorldBeat);
