import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from './Rating'

export const Card = ({ product }) => {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
            <Link to={`/products/${product.id}`}>
                <img className="p-8 rounded-t-lg h-96 w-full" src={product.imageURL[0].URL} alt="product" />
            </Link>
            <div className="px-5 pb-5">
                <h2 className='text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white'>{product.brand}</h2>
                <Link to={`/products/${product.id}`}>
                    <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white mb-4">{product.name}</h5>
                </Link>
                <Rating rating={product.rating} />
                {console.log(product)}
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    <Link to="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link>
                </div>
            </div>
        </div>


    )
}
