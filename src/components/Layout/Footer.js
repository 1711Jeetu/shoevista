import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    
      <footer className=" w-full p-4 bg-white border-t-2 border-t-slate-400 dark:border-t-gray-800  shadow p-6 dark:bg-slate-900 dark:text-white">
          <p className="text-sm text-center text-grey-500 sm:rexr-center dark:text-grey-400" >{new Date().getFullYear()}
          <Link to="/" className = "dark:hover:text-primary-100 hover:text-primary-500"> ShoeVista&trade;</Link> . All Rights Reserved!
          </p>
      </footer>
  )
}
