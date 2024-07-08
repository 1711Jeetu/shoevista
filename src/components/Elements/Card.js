import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Rating } from './Rating'
import { useCart } from '../../context/CartContext'
import './CardStyle.css';

export const Card = ({ product }) => {

    const { cartList, addToCart, removeFromCart, count} = useCart();
    const [inCart, setInCart] = useState();
    const token = JSON.parse(sessionStorage.getItem('token'));
    const navigate = useNavigate();

    useEffect(() => {
        const productInCart = cartList.find(item => item.id === product.id);
        if (productInCart) {
            setInCart(true)
        } else {
            setInCart(false);
        }
    }, [cartList, product.id]);

      const handleAddToCart = () => {
        if(token){
            addToCart(product)
        }else{
            navigate("/login")
        }
      }

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 drop-shadow-md mx-auto relative" style={{maxHeight: '460px', maxWidth: '280px'}}>
            <div className="image-container">
            <Link to={`/products/${product.id}`}>
                {
                    product.best_seller && <span className=" tag absolute p-2 dark:bg-green-700 z-22 bg-green-700  text-white rounded">
                        Best Seller
                    </span>
                }
                {
                    !product.is_in_inventory && <span className=" tag absolute p-2 dark:bg-red-900 z-22 bg-red-800  text-white rounded">
                        Unavailable
                    </span>
                }
                <div className="">
                <img className="px-8 pt-8 pb-3 rounded-t-lg Effect h-72 w-full" src={product.imageURL[0].URL} alt="product" />
                </div>
            </Link>
            </div>
            <div className="px-5 pb-5">
                <Link to={`/products/${product.id}`}>
                <h2 className='text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white'>{product.brand}</h2></Link>
                <Link to={`/products/${product.id}`}>
                    <h5 className="text-lg text-center font-semibold tracking-tight text-gray-900 dark:text-white">{product.name.substring(0, 20)}...</h5>
                </Link>
                <div className='text-md mt-1 text-center capitalize tracking-tight text-gray-900 dark:text-white'>{product.gender} SHOES </div>
                <Rating rating={product.rating} />
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    {
                        (!inCart || count === 0) &&
                        <button
                            className={`inline-flex items-center py-1 px-2 text-sm font-medium text-center text-white rounded-lg ${product.is_in_inventory ? 'bg-primary-500 dark:bg-primary-700 ' : 'bg-gray-300 dark:bg-gray-500'} `} disabled={product.is_in_inventory ? false : true}
                            onClick={handleAddToCart}
                        >
                            <div className={` text-lg mt-1 ${product.is_in_inventory ? 'dark:text-slate-100 text-slate-100' : 'text-slate-800 dark:text-slate-100'} justify-center dark:text-slate-100  bi bi-cart`}></div>
                            <i className={`ml-1 mt-1 bi bi-plus-lg ${product.is_in_inventory ? 'dark:text-slate-100 text-slate-100' : 'text-slate-800 dark:text-slate-100'}`}></i>
                        </button>
                    }
                    {
                        inCart && <button
                        className={`inline-flex items-center py-1 px-2 text-sm font-medium text-center dark:bg-red-800 bg-red-800 rounded-lg `} disabled={product.is_in_inventory ? false : true}
                        onClick={() => removeFromCart(product)}
                    >
                        <div className='hover:cursor-pointer text-lg mt-1 text-slate-100 justify-center dark:text-slate-50 bi bi-cart '></div>
                        <i className="ml-1 mt-1 bi bi-dash-lg dark:text-slate-50 text-slate-100 "></i>
                    </button>
                    }
                </div>
            </div>
        </div>
    )
}
