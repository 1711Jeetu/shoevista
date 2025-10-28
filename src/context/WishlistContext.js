import { createContext, useContext, useReducer } from "react";
import { WishlistReducer } from "../reducers/WishlistReducer";

const wishlistInitialState = {
    wishlist: []
}

const WishlistContext = createContext(wishlistInitialState);

export const WishlistProvider = ({children}) => {
    const [state, dispatch] = useReducer(WishlistReducer, wishlistInitialState);

    function addToWishlist(product) {
        const updatedList = state.wishlist.concat(product);
        dispatch({
            type: "ADD_TO_WISHLIST",
            payload: {
                products: updatedList
            }
        });
    }

    function removeFromWishlist(product) {
        const updatedList = state.wishlist.filter(item => item.id !== product.id);
        dispatch({
            type: "REMOVE_FROM_WISHLIST",
            payload: {
                products: updatedList
            }
        });
    }

    function isInWishlist(productId) {
        return state.wishlist.some(item => item.id === productId);
    }

    const value = {
        wishlist: state.wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist
    }

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    return context;
}