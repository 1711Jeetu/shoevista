    import { createContext, useContext, useReducer } from "react";
    import { CartReducer } from "../reducers/CartReducer";


    const cartInitialState = {
        cartList : [],
        total: 0,
        count: 0
    }

    const CartContext = createContext(cartInitialState);

    export const CartProvider = ({children}) => {
        const [state, dispatch] = useReducer(CartReducer, cartInitialState);

        function setCountValue(value){
            dispatch({
                type:"CHANGE_COUNT",
                payload:{
                    count:value
                }
            })
        }
        function addToCart(product) {
            const updatedList = state.cartList.concat(product);
            console.log(updatedList);
            const updatedTotal = state.total + product.price;
            const updatedCount = 1;

            dispatch({
                type: "ADD_TO_CART",
                payload: {
                products: updatedList,
                total: updatedTotal,
                count: updatedCount
                }
            });
        }

        function removeFromCart(product) {
            const updatedList = state.cartList.filter(item => item.id !== product.id);
            const updatedTotal = state.total - (product.price * product.count);
            const updatedCount = 0;

            dispatch({
                type: "REMOVE_FROM_CART",
                payload: {
                products: updatedList,
                total: updatedTotal,
                count: updatedCount
                }
            });
        }

        function increaseCount(product) {
            const updatedTotal = state.total + product.price;
            const updatedCount = state.count + 1;
            
            dispatch({
                type: "INCREASE_COUNT",
                payload: {
                    total: updatedTotal,
                    count: updatedCount
                }
            });
        }

        function decreaseCount(product) {
            if (product.count === 1) {
                removeFromCart(product);
            } else {
                const updatedTotal = state.total - product.price;
                const updatedCount = state.count - 1;
    
                dispatch({
                    type: "DECREASE_COUNT",
                    payload: {
                        total: updatedTotal,
                        count: updatedCount
                    }
                });
            }
        }

        function clearCart() {
            dispatch({
                type: "CLEAR_CART",
                payload: {
                    products: [],
                    total: 0
                }
            });
        }

        const value = {
            cartList: state.cartList,
            total: state.total,
            addToCart,
            removeFromCart,
            clearCart,
            increaseCount,
            decreaseCount,
            setCountValue,
            count: state.count
        }

        return (
            <CartContext.Provider value = {value} >
                {children}
            </CartContext.Provider>
        )
    }

    export const    useCart = () => {
        const context = useContext(CartContext);
        return context;
    }
