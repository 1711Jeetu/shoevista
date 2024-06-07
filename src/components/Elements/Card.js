import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Rating } from './Rating'
import { useCart } from '../../context/CartContext'

export const Card = ({ product }) => {

    const { cartList, addToCart, removeFromCart, count} = useCart();
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
                    product.best_seller && <span className="absolute p-2 dark:bg-red-900 bg-red-800  text-white rounded">
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
                        inCart && <button
                        className={`inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-slate-100 bg-primary-100 dark:bg-red-800 bg-red-800 rounded-lg `} disabled={product.is_in_inventory ? false : true}
                        onClick={() => removeFromCart(product)}
                    >
                        <div className='hover:cursor-pointer text-xl mt-1 text-slate-800 justify-center dark:text-slate-50 bi bi-cart text-white'></div>
                        <i className="ml-1 mt-1 bi bi-dash-lg dark:text-slate-50 text-slate-800 text-white"></i>
                    </button>
                    }
                </div>
            </div>
        </div>
    )
}
