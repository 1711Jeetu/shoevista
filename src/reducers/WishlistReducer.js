export const WishlistReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case "ADD_TO_WISHLIST":
            return {...state, wishlist: payload.products}
            
        case "REMOVE_FROM_WISHLIST":
            return {...state, wishlist: payload.products}

        default:
            return state;
    }
}