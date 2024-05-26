import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducers/FilterReducer";
import useFetch from "../hooks/useFetch";

const initialState = {
    productList: [],
    isInInventory: false,
    bestSeller: false,
    sortByPrice: null,
    sortByRatings: null,
    sortByBrand: null
}

const FilterContext = createContext(initialState);
export const FilterProvider = ({children}) => {

    const [state,dispatch] = useReducer(FilterReducer, initialState);

    function bestSellerFunction(products){
        return state.best_seller ? products.filter(product => product.best_seller) : products
    }

    function isInInventoryFunction(products){
        return state.is_in_inventory ? products.filter(product => product.is_in_inventory ): products
    }

    function sortByPriceFunction(products){
        if(state.sortByPrice === "lowtohigh"){
            console.log('lowtohigh');
            return products.sort((a , b) => Number(a.price) - Number(b.price));
        }
        if(state.sortByPrice === "hightolow") {
            console.log('hightolow');
            return products.sort((a , b) => Number(b.price) - Number(a.price));
        }
        return products;
    }

    function sortByRatingsFunction(products){
        console.log(products);
        if(state.sortByRatings === "4STARSABOVE") {
            return products.filter(product => product.rating>=4);
        }
        if(state.sortByRatings === "3STARSABOVE") {
            return products.filter(product => product.rating>=3);
        }
        if(state.sortByRatings === "2STARSABOVE") {
            return products.filter(product => product.rating>=2);
        }
        if(state.sortByRatings === "1STARSABOVE") {
            return products.filter(product => product.rating>=1);
        }
        return products;
    }

    function sortByBrandFunction(products){
        if(state.sortByBrand === "NIKE"){
            return products.filter(product => product.brand === "NIKE");
        }
        if(state.sortByBrand === "ADIDAS"){
            return products.filter(product => product.brand === "ADIDAS");
        }
        if(state.sortByBrand === "VANS"){
            return products.filter(product => product.brand === "Vans");
        }
        if(state.sortByBrand === "HUSHPUPPIES"){
            return products.filter(product => product.brand === "HUSHPUPPIES");
        }
        if(state.sortByBrand === "REEBOK"){
            return products.filter(product => product.brand === "Reebok");
        }
    }

    const filteredProductList = bestSellerFunction(isInInventoryFunction(sortByRatingsFunction(sortByPriceFunction(sortByBrandFunction(state.productList)))));
    function setInitialProductList(products) {
        dispatch ({
            type: "PRODUCT_LIST",
            payload: {
                products
            }
        })
    }

    const value = {
        products: filteredProductList,
        setInitialProductList,
        dispatch,
        state
    }

    return (
        <FilterContext.Provider value = {value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext);
    return context
}