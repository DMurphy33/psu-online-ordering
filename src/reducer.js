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
                cart,
            };
        }
        case actions.WIPE_CART: {
            const cart = [...INITIAL_STATE.cart];
            return {
                ...state,
                cart,
            }
        }
        case actions.REMOVE_FROM_CART: {
            const cart = [...state.cart];
            let searching = true;
            let i = 0;
            while(searching) {
                if(i === action.payload) {
                    cart.splice(i, 1);
                    searching = false;
                }
            i++;
            if (i >= cart.length) {
                searching = false
            }
            }
            return {
                ...state,
                cart,
            }
        }
        default: {
            return state;
        }
    };
};
