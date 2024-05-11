import React from 'react'
import { Link } from 'react-router-dom';

// const Link = require("react-router-dom").Link;
export const DropDown = ({ setDropdown, refProp }) => {
    return (
        <div
            ref={refProp}
            id='dropdownAvtar'
            className='select-none absolute top-10 right-0 z-10 w-44 bg-white rounded divide-gray-100 mt-3 shadow dark:bg-gray-700 dark:divide-gray-600'
        >
            <ul
                className='py-1 text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdownuserAvatarButton'
            >
                <li>
                    <Link
                        onClick={() => setDropdown(false)}
                        to="/"
                        className='block py-2 px-4 hover:bg-slate-800 hover:text-primary-100 dark:hover:bg-primary-100 dark:hover:text-slate-800'
                    >
                        All Products
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setDropdown(false)}
                        to="/"
                        className='block py-2 px-4 hover:bg-slate-800 hover:text-primary-100 dark:hover:bg-primary-100 dark:hover:text-slate-800'
                    >
                        Dashboard
                    </Link>
                </li>
            </ul>
            <div className="py-1">
                <span className='cursor-pointer block text-sm py-2 px-4 hover:bg-slate-800 hover:text-primary-100 hover:bg-gray-100 dark:hover:bg-primary-100 dark:text-gray-200 dark:hover:text-slate-80'>
                    Log out
                </span>
            </div>
        </div>
    );
};
