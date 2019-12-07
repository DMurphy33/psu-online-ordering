import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart, wipeCart, removeFromCart } from './actions';
import { ListGroup, ListGroupItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state={
            isModalOpen: false,
            isCartErrorOpen: false,
            isNameErrorOpen: false,
            isCardNumberErrorOpen: false,
            isExpirationDateErrorOpen: false,
            isCvcErrorOpen: false,
            isCompletionMessageOpen: false,
            nameChanged: false,
            cardNumberChanged: false,
            expirationDateChanged: false,
            cvcChanged: false,
            location: '',
            name: '',
            cardNumber: '',
            expirationDate: '',
            cvc: '',
        };
    }

    handleModalChange = () => {
        this.setState({
            ...this.state,
            isModalOpen: !this.state.isModalOpen,
        });
    }

    createCheckout = () => {
        return(
            <div>
                {this.createItemList()}
                {this.createTotalPriceDisplay()}
                {this.createPaymentForm()}
                {this.createCartErrorMessage()}
                {this.createNameErrorMessage()}
                {this.createCardNumberErrorMessage()}
                {this.createExpirationDateErrorMessage()}
                {this.createCvcErrorMessage()}
                {this.createCheckoutButton()}
                {this.createConfirmationModal()}
            </div>
        );
    }

    handleNameChange = (evt) => {
        this.setState({
            ...this.state,
            name: evt.target.value,
            nameChanged: true,
        });
    }

    handleCardNumberChange = (evt) => {
        this.setState({
            ...this.state,
            cardNumber: evt.target.value,
            cardNumberChanged: true,
        });
    }

    handleExpirationDateChange = (evt) => {
        this.setState({
            ...this.state,
            expirationDate: evt.target.value,
            expirationDateChanged: true,
        });
    }

    handleCvcChange = (evt) => {
        this.setState({
            ...this.state,
            cvc: evt.target.value,
            cvcChanged: true,
        })
    }

    createPaymentForm = () => {
        return(
            <div>
                <h5>
                    Payment Information
                </h5>
                <Form>
                    <FormGroup>
                        <Label 
                            for='name-on-card'
                        >
                            Name on Card
                        </Label>
                        <Input
                            value={this.state.name}
                            onChange={this.handleNameChange} 
                            type="text" 
                            id='name-on-card' 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label 
                            for='card-number'
                        >
                            Card Number
                        </Label>
                        <Input 
                            value={this.state.cardNumber}
                            onChange={this.handleCardNumberChange}
                            type="text" 
                            id='card-number'
                            maxLength={16}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label 
                            for='expiration-date'
                        >
                            Expiration Date
                        </Label>
                        <Input 
                            value={this.state.expirationDate}
                            onChange={this.handleExpirationDateChange}
                            type="text" 
                            id='expiration-date' 
                            maxLength={5}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label 
                            for='cvc'
                        >
                            CVC
                        </Label>
                        <Input 
                            value={this.state.cvc}
                            onChange={this.handleCvcChange}
                            type="text" 
                            id='cvc' 
                            maxLength={3}
                        />
                    </FormGroup>
                </Form>
            </div>
        );
    }

    handleConfirmation = () => {
        const tempState = {...this.state};
        this.setState({
            ...this.state,
            location: this.props.cart[0].location,
        }, () => this.handleModalChange());
        const location = this.props.cart[0].location;
        let shouldExit = false;
        let searching = true;
        let i = 0;
        while(searching) {
            if (this.props.cart[i].location !== location) {
                tempState.isCartErrorOpen = true;
                shouldExit = true;
                searching = false;
            } else {
                tempState.isCartErrorOpen = false;
            }
            i++;
            if(i >= this.props.cart.length) {
                searching = false;
            }
        }
        if (this.state.name.length === 0) {
            tempState.isNameErrorOpen = true;
            shouldExit = true;
        } else {
            tempState.isNameErrorOpen = false;
        }
        if (this.state.cardNumber.length !== 16) {
            tempState.isCardNumberErrorOpen = true;
            shouldExit = true;
        } else {
            tempState.isCardNumberErrorOpen = false;
        }
        if (this.state.expirationDate.length !== 5) {
            tempState.isExpirationDateErrorOpen = true;
            shouldExit = true;
        } else {
            tempState.isExpirationDateErrorOpen = false;
        }
        if (this.state.cvc.length !== 3) {
            tempState.isCvcErrorOpen = true;
            shouldExit = true;
        } 
        else {
            tempState.isCvcErrorOpen = false;
        }
        this.setState(tempState);
        if (shouldExit) {
            return;
        }
        this.setState({
            ...this.state,
            isCompletionMessageOpen: true,
        });
        this.props.clearCart();
    }

    createCompletionMessage = () => {
        let pickupLocation = '';
        switch (this.state.location) {
            case 'West': {
                pickupLocation = ' at the Waring Commons Desk';
                break;
            }
            case 'East': {
                pickupLocation = 'at the Findlay Commons Desk';
                break;
            }
            case 'North': {
                pickupLocation = 'at the Warnock Commons Desk';
                break;
            }
            case 'South': {
                pickupLocation = 'at the Redifer Commons Desk';
                break;
            }
            case 'HUB': {
                pickupLocation = 'by the bookstore entrance in the HUB';
                break;
            }
            case 'CafeLaura': {
                pickupLocation = 'by the Cafe Laura entrance';
                break;
            }
            case 'Pollock': {
                pickupLocation = 'at the Pollock Commons Desk';
                break;
            }
            case 'Saxbys': {
                pickupLocation = 'by the entrance to Saxbys';
                break;
            }
            default: {
                break;
            }
        }
        const completionMessage = `Your order has been completed! It will be ready for pickup ${pickupLocation} in approximately 15 minutes.`;
        return(
            <Alert
                isOpen={this.state.isCompletionMessageOpen}
                color='success'
            >
                {completionMessage}
            </Alert>
        );
    }

    createCartErrorMessage = () => {
        return(
            <Alert 
                isOpen={this.state.isCartErrorOpen}
                color='danger'
            >
                Oops. You have items in your cart from different locations. 
                Please make sure your cart only contains items from dining options in the same building to proceed with checkout.
            </Alert>
        );
    }

    createNameErrorMessage = () => {
        return(
            <Alert 
                isOpen={this.state.isNameErrorOpen}
                color='danger'
            >
                Please enter a name for the 'Name on Card' field.
            </Alert>
        );
    }

    createCardNumberErrorMessage = () => {
        return(
            <Alert 
                isOpen={this.state.isCardNumberErrorOpen}
                color='danger'
            >
                Invalid card number.
            </Alert>
        );
    }

    createExpirationDateErrorMessage = () => {
        return(
            <Alert 
                isOpen={this.state.isExpirationDateErrorOpen}
                color='danger'
            >
                Invalid expiration date.
            </Alert>
        );
    }

    createCvcErrorMessage = () => {
        return(
            <Alert 
                isOpen={this.state.isCvcErrorOpen}
                color='danger'
            >
                Invalid CVC.
            </Alert>
        );
    }


    createConfirmationModal = () => {
        let numItems = 0;
        for (let i=0; i<this.props.cart.length; i++) {
            numItems += this.props.cart[i].food.length
        }
        let price = 0.0;
        this.props.cart.forEach((item) => {
            price += item.price;
        });
        price *= 1.06 //tax
        return(
            <Modal 
                isOpen={this.state.isModalOpen}
                toggle={this.handleModalChange}
                size='sm'
                centered
            >
                <ModalHeader 
                    toggle={this.handleModalChange}
                >
                    Confirm Checkout
                </ModalHeader>
                <ModalBody>
                    {`Confirm order of ${numItems} items for $${Number(price).toFixed(2)}?`}
                </ModalBody>
                <ModalFooter>
                    <Button
                        key='confirmation-button'
                        onClick={this.handleConfirmation}    
                    >
                        Confirm
                    </Button>
                    <Button
                        key='cancel-button'
                        onClick={this.handleModalChange}
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }

    createCheckoutButton = () => {
        let totalPrice = 0.0;
        this.props.cart.forEach((item) => {
            totalPrice += item.price;
        });
        totalPrice *= 1.06 //tax
        return (
            <div style={{textAlign:'center'}}>
                <Button
                    key='checkout-button'
                    onClick={this.handleModalChange}
                >
                    {`Checkout: $${Number(totalPrice).toFixed(2)}`}
                </Button>
            </div>
        )
    }

    displayEmptyMessage= () => {
        return (
            <div style={{textAlign:'center'}}>
                <em>
                    Add items to your cart to proceed to checkout.
                </em>
            </div>
        );
    }
    
    createItemList = () => {
        const itemList = [];
        for (let i=0; i<this.props.cart.length; i++) {
            const item = [];
            for (let j=0; j<this.props.cart[i].food.length; j++) {
                if (typeof this.props.cart[i].food[j] === 'string') {
                    item.push(
                        <div
                            key={`food${i}${j}`}
                        >
                            <span>
                                {this.props.cart[i].food[j]}
                            </span>
                        </div>
                    );
                } else {
                    const attributes = Object.keys(this.props.cart[i].food[j]);
                    const values = Object.values(this.props.cart[i].food[j]);
                    item.push(
                        <div
                            key={`item${i}type`}
                        >
                            <span style={{fontWeight:'bold'}}>
                                {values[0]}
                            </span>
                        </div>
                    );
                    for (let k=1; k<attributes.length; k++) {
                        item.push(
                            <div
                                key={`item${i}attribute${k}`}
                            >
                                <span>
                                    {`${attributes[k]}: ${values[k]}`}
                                </span>
                            </div>
                        )
                    }
                }
            }
            item.push(
                <div
                    key={`price${i}`}
                >
                    <span
                        className='item-price'
                    >
                        {`$${Number(this.props.cart[i].price).toFixed(2)}`}
                    </span>
                </div>
            );
            item.push(
                <div
                    key={`remove-button${i}`}
                >
                    <FontAwesomeIcon 
                            onClick={() => this.props.removeItem(i)}
                            className='removal-x' 
                            icon={faTimesCircle} 
                    />
                </div>
            )
            itemList.push(
                <ListGroupItem
                    key={`item${i}`}
                >
                    {item}
                </ListGroupItem>
            )
        }
        return (
            <ListGroup>
                {itemList}
            </ListGroup>
        );        
    }

    createTotalPriceDisplay = () => {
        if(this.props.cart.length > 0) {
            let price = 0.0;
            this.props.cart.forEach((item) => {
                price += item.price;
            });
            const TAX_CONSTANT = .06;
            const tax = price * TAX_CONSTANT;
            const totalPrice = price + tax;
            return (
                <div>
                    <div
                        key='sub-total'
                        style={{textAlign: 'right'}}
                    >
                        Sub-Total:
                        {` $${Number(price).toFixed(2)}`}
                    </div>
                    <div
                        key='tax'
                        style={{textAlign: 'right'}}
                    >
                        Tax:
                        {` $${Number(tax).toFixed(2)}`}
                    </div>
                    <div
                        key='total'
                        style={{fontWeight:'bold', textAlign:'right'}}
                    >
                        Total:
                        {` $${Number(totalPrice).toFixed(2)}`}
                    </div>
                </div>
            );
        } else return;
    }
    
    render() {
        return(
            <div>
                <h4 className='section-title'>
                    Checkout
                </h4>
                {this.props.cart.length === 0 ? this.displayEmptyMessage() : this.createCheckout()}
                {this.createCompletionMessage()}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    modifyCart: payload => dispatch(updateCart(payload)),
    clearCart: () => dispatch(wipeCart()),
    removeItem: payload => dispatch(removeFromCart(payload)),
});

const mapStateToProps = state => ({
    cart: state.cart,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Checkout);
