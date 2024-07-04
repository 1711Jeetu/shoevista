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
                sortByPrice: payload.sortByPrice,
                filters: [
                    ...state.filters.filter(filter => filter.type !== 'SORT_BY_PRICE'),
                    { type: 'SORT_BY_PRICE', label: ` ${payload.sortByPrice}` }
                ]
            };
        case "SORT_BY_RATINGS":
            return {
                ...state,
                sortByRatings: payload.sortByRatings,
                filters: [...state.filters, { type: 'SORT_BY_RATINGS', label: ` ${payload.sortByRatings}` }]
            };
        case "SORT_BY_CATEGORY":
            return {
                ...state,
                sortByCategory: payload.sortByCategory,
                filters: [
                    ...state.filters.filter(filter => filter.type !== 'SORT_BY_CATEGORY'),
                    { type: 'SORT_BY_CATEGORY', label: ` ${payload.sortByCategory}` }
                ]
            };
        case "ADD_BRAND":
            return {
                ...state,
                sortByBrand: [...state.sortByBrand, payload.brand],
                filters: [...state.filters, { type: 'ADD_BRAND', label: ` ${payload.brand}` }]
            };
        case "REMOVE_BRAND":
            return {
                ...state,
                sortByBrand: state.sortByBrand.filter(brand => brand !== payload.brand),
                filters: state.filters.filter(filter => filter.type !== 'ADD_BRAND' || filter.label !== ` ${payload.brand}`)
            };
        case "BEST_SELLER":
            return {
                ...state,
                bestSeller: payload.bestSeller,
                filters: [...state.filters, { type: 'BEST_SELLER', label: 'Best-Seller' }]
            };
        case "IS_IN_INVENTORY":
            return {
                ...state,
                is_in_inventory: payload.is_in_inventory,
                filters: [...state.filters, { type: 'IS_IN_INVENTORY', label: 'In-Stock' }]
            };
            case "REMOVE_FILTER":
                if (payload.type === 'ADD_BRAND') {
                    return {
                        ...state,
                        sortByBrand: state.sortByBrand.filter(brand => brand !== payload.brand),
                        filters: state.filters.filter(filter => !(filter.type === 'ADD_BRAND' && filter.label === ` ${payload.brand}`))
                    };
                }
                return {
                    ...state,
                    filters: state.filters.filter(filter => filter.type !== payload.type),
                    ...(payload.type === 'BEST_SELLER' && { bestSeller: false }),
                    ...(payload.type === 'IS_IN_INVENTORY' && { is_in_inventory: false }),
                    ...(payload.type === 'SORT_BY_PRICE' && { sortByPrice: null }),
                    ...(payload.type === 'SORT_BY_RATINGS' && { sortByRatings: null }),
                    ...(payload.type === 'SORT_BY_CATEGORY' && { sortByCategory: null }),
                };
        case "CLEAR_FILTER":
            return {
                ...state,
                is_in_inventory: false,
                bestSeller: false,
                sortByPrice: null,
                sortByRatings: null,
                sortByCategory: null,
                sortByBrand: [],
                filters: []
            };
        default:
            return state;
    }
};
