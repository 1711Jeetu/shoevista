import React from 'react';
import { useWishlist } from '../../../context/WishlistContext';
import { useCart } from '../../../context/CartContext';
import { Link } from 'react-router-dom';

export const WishlistCard = () => {
    const { wishlist, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    const moveToCart = (product) => {
        addToCart(product);
        removeFromWishlist(product);
    }

    return (
        <div className='flex justify-center' style={{ marginTop: '120px' }}>
            <div style={{ width: '70%' }}>
                <div className='bg-gray-100 dark:bg-gray-800'>
                    <h2 className='text-4xl dark:text-slate-100 p-4 font-bold uppercase'>Your Wishlist</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                    {wishlist.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow dark:bg-gray-800 p-4">
                            <Link to={`/products/${product.id}`}>
                                <img className="h-48 w-full object-cover rounded" src={product.image} alt={product.name} />
                            </Link>
                            <div className="p-4">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                                <div className="flex items-center justify-between mt-2.5 mb-5">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                    <div className="flex items-center space-x-2">
                                        <button onClick={() => removeFromWishlist(product)} className="text-red-500 hover:text-red-600">
                                            <i className="bi bi-heart-fill"></i>
                                        </button>
                                        <button onClick={() => moveToCart(product)} className="text-blue-700 hover:text-blue-800">
                                            <i className="bi bi-cart-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}