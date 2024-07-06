import React, { forwardRef } from 'react';
import { useFilter } from '../../../context/FilterContext';
import { Link } from 'react-router-dom';

export const DropDownSortBy = forwardRef((props, ref) => {
    const { state, dispatch } = useFilter();
    return (
        <div
            ref={ref}
            id='dropdownAvtar'
            style={{ left: "105px",top: "230px" }}
            className='select-none absolute top-7 w-44 z-10 bg-white rounded divide-gray-100 mt-3 shadow dark:bg-gray-700 dark:divide-gray-600'
        >
            <ul
                className='text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdownuserAvatarButton'
            >
                <li>
                    <div
                        // onClick={() => setDropdown(false)}
                        onClick={()=>dispatch({type:"BEST_SELLER",payload:{bestSeller:true}})}
                        // to="/products"
                        className='block py-2 px-4 hover:bg-slate-800 hover:text-primary-100 dark:hover:bg-primary-100 dark:hover:text-slate-800'
                        style={{fontSize: '16px'}}
                    >
                        Best-Seller
                    </div>
                </li>
                <li>
                    <Link
                        
                        onClick={()=>dispatch({type:"IS_IN_INVENTORY",payload:{is_in_inventory:true}})}
                        checked={state.is_in_inventory}
                        className='block py-2 px-4 hover:bg-slate-800 hover:text-primary-100 dark:hover:bg-primary-100 dark:hover:text-slate-800'
                        style={{fontSize: '16px'}}
                    >
                        In-Stock
                    </Link>
                </li>
            </ul>
        </div>
    )
});
