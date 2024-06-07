import React from 'react'

export const CartRow = ({product,increaseCount, decreaseCount, count, removeFromCart,setCountValue}) => {
    console.log(product.count);

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="p-4">
                <img src={product.imageURL[0].URL} className="w-16 md:w-32 max-w-full max-h-full" alt="shoe" />
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {product.name}
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center">
                    {
                        <button className={`inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600`} disabled={count===0 ? true: false} type="button" onClick={() => {decreaseCount(product)
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
                    <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600" type="button" onClick={() => {increaseCount(product) 
                        setCountValue(product.count++)
                    }}>
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                ${product.price * product.count}
            </td>
            <td className="px-6 py-4">
                <button onClick={() => {removeFromCart(product) 
                                        product.count = 1;
                }} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
            </td>
        </tr>
    )
}
