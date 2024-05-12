import React from 'react'
import { Card } from './Card'

export const Featured = () => {
  return (
    <div>
        <p className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white pt-4 dark:bg-gray-800 dark:border-gray-700' >Featured</p>
        <div className="flex p-4 flex-wrap dark:bg-gray-800 dark:border-gray-700 ">
            <Card />
            <Card />
            <Card />
        </div>
    </div>
    
  )
}
