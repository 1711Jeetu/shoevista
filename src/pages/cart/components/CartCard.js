import React from 'react'
import { CartRow } from './CartRow'
import { useCart } from '../../../context/CartContext'

export const CartCard = () => {

    const { cartList, total, increaseCount, decreaseCount, count, removeFromCart } = useCart();
    const tax = total ? 10 : 0 ;

    return (
        <div className='flex justify-center' style={{ marginTop: '120px' }}>
            <div style={{ minWidth: '70%' }}>
                <div className='bg-gray-100 dark:bg-gray-800'>
                    <h2 className='text-4xl dark:text-slate-100 p-4 font-bold uppercase'>Your Cart</h2>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-16 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Qty
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartList.map((product) => (
                                <CartRow key={product.id} product={product} increaseCount={increaseCount} decreaseCount={decreaseCount} count={count} removeFromCart ={removeFromCart} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">SUMMARY</h5>
                <div className="flex justify-between mb-5">
                    <div className='text-2xl dark:text-slate-100 font-semibold'>SUBTOTAL</div>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-3xl font-semibold">{total}</span>
                    </div>
                </div>
                <div className="flex justify-between mb-5">
                    <div className='text-2xl dark:text-slate-100 font-semibold'>Tax</div>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-3xl font-semibold">{tax}</span>
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className="flex justify-between mb-5 mt-10">
                    <div className='text-2xl dark:text-slate-100 font-bold'>Total</div>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-3xl font-bold">{total + tax}</span>
                    </div>
                </div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Checkout</button>
            </div>

        </div>
    )
}
