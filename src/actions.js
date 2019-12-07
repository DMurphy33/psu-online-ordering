export const actionTypes = Object.freeze({
    UPDATE_CART: Symbol('UPDATE_CART'),
    WIPE_CART: Symbol('WIPE_CART'),
    REMOVE_FROM_CART: Symbol('REMOVE_FROM_CART'),
});

export const updateCart = (payload) => {
    return {
        type: actionTypes.UPDATE_CART,
        payload,
    };
};

export const wipeCart = () => {
    return {
        type: actionTypes.WIPE_CART,
    };
};

export const removeFromCart = (payload) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload,
    }
}

export default actionTypes;
