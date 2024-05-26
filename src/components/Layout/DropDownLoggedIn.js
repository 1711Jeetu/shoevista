import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../services/dataService";
import { toast } from "react-toastify";

export const DropdownLoggedIn = ({setDropdown,refProp}) => {
  const [user, setUser] = useState({});

  function handleSignOut() {
    setDropdown(false);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('cbid');
  }

  useEffect(() => {
    async function fetchUserData() {
        try {
            const data = await getUser();
            setUser(data);
        } catch(e) {
            toast.error(e.message);
        }
    }

    fetchUserData();
  }, []);
  return (
    <div
      ref={refProp}
      className="z-50 absolute top-10 right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
      id="user-dropdown"
    >
      <div className="px-4 py-3" style={{maxWidth: '175px'}}>
        <span className="block text-sm text-gray-900 dark:text-white">
          {user && user.name}
        </span>
        <span className="block text-sm  text-gray-500 truncate dark:text-slate-200" >
          {user && user.email}
        </span>
      </div>
      <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <Link
            to="/dashboard"
            onClick={() => setDropdown(false)}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => handleSignOut()}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};
