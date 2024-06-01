export const FilterReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "PRODUCT_LIST":
            return {
                ...state,
                productList: payload.products
            };
        case "SORT_BY_PRICE":
            return {
                ...state,
                sortByPrice: payload.sortByPrice
            }
        case "SORT_BY_RATINGS":
            return {
                ...state,
                sortByRatings: payload.sortByRatings
            }
        case "SORT_BY_CATEGORY":
            return {
                ...state,
                sortByCategory: payload.sortByCategory
            }
        case "BEST_SELLER":
            return {
                ...state,
                bestSeller: payload.bestSeller
            }
        case "IS_IN_INVENTORY":
            return {
                ...state,
                is_in_inventory: payload.is_in_inventory
            }
        case "CLEAR_FILTER":
            console.log('gaya');
            return {
                ...state,
                isInInventory: false,
                bestSeller: false,
                sortByPrice: null,
                sortByRatings: null,
                sortByCategory: null
            }
        default:
            return state
    }
}