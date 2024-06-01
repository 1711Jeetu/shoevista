import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Rating } from './Rating'
import { useCart } from '../../context/CartContext'

export const Card = ({ product }) => {

    const { cartList, addToCart, increaseCount, decreaseCount, count , setCountValue } = useCart();
    // console.log(addToCart);
    const [inCart, setInCart] = useState();

    useEffect(() => {
        const productInCart = cartList.find(item => item.id === product.id);
        if (productInCart) {
            setInCart(true)
        } else {
            setInCart(false);
        }
    }, [cartList, product.id]);

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 relative">
            <Link to={`/products/${product.id}`}>
                {
                    product.best_seller && <span className="absolute p-2 bg-red-900  text-white rounded">
                        Best Seller
                    </span>
                }
                <img className="p-8 rounded-t-lg h-96 w-full hover:p-3 hover:rounded-lg" src={product.imageURL[0].URL} alt="product" />
            </Link>
            <div className="px-5 pb-5">
                <h2 className='text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white'>{product.brand}</h2>
                <Link to={`/products/${product.id}`}>
                    <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white mb-4">{product.name.substring(0, 23)}...</h5>
                </Link>
                <div className='text-xl text-center capitalize tracking-tight text-gray-900 dark:text-white'>{product.gender} SHOES </div>
                <Rating rating={product.rating} />
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    {
                        (!inCart || count === 0) &&
                        <button
                            className={`inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-slate-100 bg-primary-100 dark:bg-primary-700 rounded-lg `} disabled={product.is_in_inventory ? false : true}
                            onClick={() => addToCart(product)}
                        >
                            <div className='hover:cursor-pointer text-xl mt-1 text-slate-800 justify-center dark:text-slate-50 bi bi-cart'></div>
                            <i className="ml-1 mt-1 bi bi-plus-lg dark:text-slate-50 text-slate-800"></i>
                        </button>
                    }
                    {
                        inCart && count > 0 && <div className="flex items-center">
                            {
                                <button className={`inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600`} disabled={count === 0 ? true : false} type="button" onClick={() => {
                                    decreaseCount(product)
                                    setCountValue(product.count--)
                                }}>
                                    <span className="sr-only">Quantity button</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                    </svg>
                                </button>
                            }
                            <div>
                                <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg block px-2.5 py-1 dark:bg-gray-700 text-center dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder={product.count} required />
                            </div>
                            <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600" type="button" onClick={() => {
                                increaseCount(product)
                                setCountValue(product.count++)
                            }}>
                                <span className="sr-only">Quantity button</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
