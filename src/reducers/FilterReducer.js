    export const FilterReducer = (state, action) => {
        const {type, payload} = action;

        switch(type){
            case "PRODUCT_LIST":
                return{
                    ...state,
                    productList: payload.products
                };
            case "SORT_BY_PRICE":
                return{
                    ...state,
                    sortByPrice: payload.sortByPrice
                }
            case "SORT_BY_RATINGS":
                return{
                    ...state,
                    sortByRatings: payload.sortByRatings
                }
            case "SORT_BY_BRAND":
                return{
                    ...state,
                    sortByBrand: payload.sortByBrand
                }
            case "BEST_SELLER":
                return{
                    ...state,
                    bestSeller: payload.bestSeller
                }
            case "IS_IN_INVENTORY":
                return{
                    ...state,
                    isInInventory: payload.isInInventory
                }
            default:
                return state
        }
    }