import React from 'react'
import { Link } from 'react-router-dom'

export const DropDown = ({ setDropdown, refProp }) => {
    return (
        <div
            ref={refProp}
            id='dropdownAvtar'
            className='select-none absolute top-10 right-0 z-10 w-44 bg-white rounded divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
        >
            <ul
                className='py-1 text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdownuserAvatarButton'
            >
                <li>
                    <Link
                        onClick={() => setDropdown(false)}
                        to="/products"
                        className='block py-2 px-4 hover:bg-slate-800 hover:text-primary-700 dark:hover:bg-primary-900 dark:hover:text-slate-800'
                    >
                        All Products
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setDropdown(false)}
                        to="/dashboard"
                        className='block py-2 px-4 hover:bg-slate-800 hover:text-primary-700 dark:hover:bg-primary-900 dark:hover:text-slate-800'
                    >
                        Dashboard
                    </Link>
                </li>
            </ul>
            <div className="py-1">
                <span className='cursor-pointer block text-sm py-2 px-4 hover:bg-slate-800 hover:text-primary-700 hover:bg-gray-100 dark:hover:bg-primary-900 dark:text-gray-200 dark:hover:text-slate-80'>
                    Log out
                </span>
            </div>
        </div>
    );
};
