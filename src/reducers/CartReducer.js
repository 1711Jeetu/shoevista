export const CartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartList: payload.products,
                total: payload.total,
                count: payload.count
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartList: payload.products,
                total: payload.total,
                count: payload.count
            };

        case "INCREASE_COUNT":
            return {
                ...state,
                total: payload.total,
                count: payload.count
            };
        case "DECREASE_COUNT":
            return {
                ...state,
                total: payload.total,
                count: payload.count
            };
        case "CLEAR_CART":
            return {
                ...state,
                cartList: payload.products,
                total: payload.total,
            };
        default:
            return state;
    }
}