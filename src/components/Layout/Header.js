import React, { useEffect, useRef, useState } from 'react'
import lightLogo from '../../assets/lightLogo.png'
import darkLogo from '../../assets/darkLogo.png'
import { DropDown } from './DropDown';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [mobileMode, setMobileMode] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const activeClasses =
  "block py-2 px-3 text-primary-100 hover:text-primary-1000 rounded";

const inactiveClasses =
  "block py-2 px-3 dark:text-white text-black hover:text-primary-800 rounded";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    //Attach the event listner
    document.addEventListener("mousedown", handleClickOutside);

    //clean up the event listner or component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [dropdownRef]);


  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-20 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={darkMode ? darkLogo : lightLogo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ShoeVista</span>
        </Link>
        <div className="flex md:order-2">
          <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700  rounded-lg text-sm p-2.5 me-1" onClick={() => setMobileMode(!mobileMode)}>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search..." />
          </div>
          <span
            className={`hover:cursor-pointer text-xl text-slate-800 dark:text-slate-50 mx-5 mt-1 bi bi-${darkMode ? "sun-fill" : "moon-fill"}`}
            onClick={() => setDarkMode(!darkMode)}
          >
          </span>
          <Link to='/' className='hover:cursor-pointer text-xl mt-1 text-slate-800 dark:text-slate-50 mr-5 bi bi-cart'></Link>
          <span
              onClick={() => setDropdown(!dropdown)}
              className='hover:cursor-pointer text-xl text-slate-800 dark:text-slate-50 mr-5 mt-1 bi bi-person-circle'
            ></span>
            {dropdown && <DropDown setDropdown={setDropdown} refProp={dropdownRef}/>}
            {console.log(dropdown)}
          <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none   dark:text-gray-400 dark:hover:bg-gray-700" aria-controls="navbar-search" aria-expanded="false" onClick={() => setMobileMode(!mobileMode)}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${mobileMode ? "" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-search">
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search..." />
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink to="/" className={({ isActive }) =>
                    isActive ? activeClasses : inactiveClasses
                  } aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink to="/men" className={({ isActive }) =>
                    isActive ? activeClasses : inactiveClasses
                  } aria-current="page">Men</NavLink>
            </li>
            <li>
              <NavLink to="/women" className={({ isActive }) =>
                    isActive ? activeClasses : inactiveClasses
                  } aria-current="page">Women</NavLink>
            </li>
            <li>
              <NavLink 
              to="/kids" 
              className={({ isActive }) =>
                isActive ? activeClasses : inactiveClasses
              } aria-current="page">Kids</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
