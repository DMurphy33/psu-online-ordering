import actions from './actions';

export const INITIAL_STATE = {
    cart: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.UPDATE_CART: {
            const cart = [...state.cart];
            cart.push(action.payload);
            return {
                ...state,
                cart
            };
        }
        default: {
            return state;
        }
    };
};
