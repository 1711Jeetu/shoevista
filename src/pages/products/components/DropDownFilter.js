import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import { DropDownSortBy } from './DropDownSortBy';
import { useFilter } from '../../../context/FilterContext';

// const Link = require("react-router-dom").Link;
export const DropDownFilter = ({ setDropdown, refProp }) => {
    const [sortBy, setSortBy] = useState(false);
    const {state,dispatch}=useFilter();

    const SearchRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
          if (SearchRef.current && !SearchRef.current.contains(event.target)) {
            setDropdown(false);
          }
        };
    
        //Attach the event listner
        document.addEventListener("mousedown", handleClickOutside);
    
        //clean up the event listner or component unmount
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    
      }, [SearchRef]);

    return (
        <div
            ref={refProp}
            id='dropdownAvtar'
            className='select-none absolute top-10 w-44 z-10 bg-white rounded divide-gray-100 mt-3 shadow dark:bg-gray-700 dark:divide-gray-600'
        >
            <ul
                className='py-1  text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdownuserAvatarButton'
            >
                <li>
                    <Link
                        onClick={() => setDropdown(false)}
                        to="/products"
                        className='block py-2 px-4 hover:bg-slate-800 hover:text-primary-100 dark:hover:bg-primary-100 dark:hover:text-slate-800'
                    >
                        All Products
                    </Link>
                </li>
                <li>
                    <div
                        onClick={() => setSortBy(!sortBy)}
                        // onMouseEnter={() => setSortBy(!sortBy)}
                        // to="/"
                        className='block py-2 px-4 hover:bg-slate-800 hover:text-primary-100 dark:hover:bg-primary-100 dark:hover:text-slate-800'
                    >
                        Sort By
                    </div>
                    {sortBy && <DropDownSortBy setSortBy={setSortBy} refProp={SearchRef}/>}
                </li>
                <li>
                    <div
                        // onClick={() => setDropdown(false)}
                        onClick={()=>dispatch({type:"BEST_SELLER",payload:{bestSeller:true}})}
                        // to="/products"
                        className='block py-2 px-4 hover:bg-slate-800 hover:text-primary-100 dark:hover:bg-primary-100 dark:hover:text-slate-800'
                    >
                        Best-Seller
                    </div>
                </li>
                <li>
                    <Link
                        
                        onClick={()=>dispatch({type:"IS_IN_INVENTORY",payload:{is_in_inventory:true}})}
                        checked={state.is_in_inventory}
                        className='block py-2 px-4 hover:bg-slate-800 hover:text-primary-100 dark:hover:bg-primary-100 dark:hover:text-slate-800'
                    >
                        In-Stock
                    </Link>
                </li>
            </ul>
        </div>
    );
};
