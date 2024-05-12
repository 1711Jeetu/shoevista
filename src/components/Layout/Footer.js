import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    
      <footer className=" w-full p-4 bg-white border-t border-grey-200 shadow p-6 dark:bg-slate-900 dark:text-white dark:border-slate-50">
          <p className="text-sm text-center text-grey-500 sm:rexr-center dark:text-grey-400" >{new Date().getFullYear()}
          <Link to="/" className = "hover:text-primary-800 "> ShoeVista&trade;</Link> . All Rights Reserved!
          </p>
      </footer>
  )
}
