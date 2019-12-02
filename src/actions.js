export const actionTypes = Object.freeze({
    UPDATE_CART: Symbol('UPDATE_CART'),
});

export const updateCart = (payload) => {
    return {
        type: actionTypes.UPDATE_CART,
        payload,
    };
};

export default actionTypes;
