import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from './Rating'

export const Card = ({ product }) => {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 relative">
            <Link to={`/products/${product.id}`}>
                {
                    product.best_seller && <span className="absolute p-2 bg-red-900  text-white rounded">
                        Best Seller
                    </span>
                }
                {
                    product.is_in_inventory && <span className={`absolute p-2 bg-green-900 ${product.best_seller ? `top-10` : `top-0`}  text-white rounded`}>
                        In Stock
                    </span>
                }
                <img className="p-8 rounded-t-lg h-96 w-full hover:p-3 hover:rounded-lg" src={product.imageURL[0].URL} alt="product" />
            </Link>
            <div className="px-5 pb-5">
                <h2 className='text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white'>{product.brand}</h2>
                <Link to={`/products/${product.id}`}>
                    <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white mb-4">{product.name.substring(0, 23)}...</h5>
                </Link>
                <div className='text-xl text-center tracking-tight text-gray-900 dark:text-white'>{product.gender} SHOES</div>
                <Rating rating={product.rating} />
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    <Link to="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart
                    <i className="ml-2 mt-1 bi bi-plus-lg dark:text-slate-50 text-slate-800"></i>
                    </Link>
                </div>
            </div>
        </div>


    )
}
