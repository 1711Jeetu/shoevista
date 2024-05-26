import React from 'react'
import { Link } from 'react-router-dom';

export const DropdownLoggedOut = ({setDropdown, refProp}) => {
  return (
    <div
      ref={refProp}
      className="z-50 absolute top-10 right-0 w-40 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
      id="user-dropdown"
    >
      <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="/login"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            onClick={() => setDropdown(false)}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
}
